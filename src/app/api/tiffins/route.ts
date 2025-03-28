import { NextResponse } from "next/server";
import dbConnect from '@/lib/dbConnect';
import { Tiffin } from "@/modal/Tiffin";

// ✅ GET: Fetch tiffin records or summary
export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const userId = searchParams.get("userId");
    if (!userId) return NextResponse.json({ error: "User ID is required" }, { status: 400 });

    await dbConnect();

    // Fetch uncleared and cleared tiffins separately
    const unclearedTiffins = await Tiffin.find({ userId, isPaid: false }).sort({ date: 1 });
    const clearedTiffins = await Tiffin.find({ userId, isPaid: true }).sort({ paymentDate: 1 });
    const allTiffins = await Tiffin.find({ userId }).sort({ paymentDate: 1 });

    // Total tiffins count
    const totalTiffins = await Tiffin.aggregate([
      { $match: { userId } },
      { $group: { _id: null, total: { $sum: "$tiffinCount" } } },
    ]);

    // Total uncleared tiffins count
    const totalUnclearedTiffins = await Tiffin.aggregate([
      { $match: { userId, isPaid: false } },
      { $group: { _id: null, total: { $sum: "$tiffinCount" } } },
    ]);

    // Cleared tiffin summary (min & max payment date + total cleared tiffins)
    const clearedSummary = await Tiffin.aggregate([
      { 
        $match: { 
          userId, 
          isPaid: true, 
          paymentDate: { $ne: null }  // Only include documents with a valid paymentDate
        } 
      },
      {
        $group: {
          _id: { 
            $dateToString: { format: "%Y-%m-%dT%H:%M:%S.%LZ", date: "$paymentDate" } 
          },
          totalTiffins: { $sum: "$tiffinCount" },
          startDate: { $min: "$date" },
          endDate: { $max: "$date" }
        },
      },
      { $sort: { _id: 1 } },
    ]);
    
    
    
    return NextResponse.json({
      success: true,
      unclearedTiffins, // All uncleared tiffins
      clearedTiffins, // All cleared tiffins
      allTiffins,
      totalTiffins: totalTiffins.length ? totalTiffins[0].total : 0, // Handle empty results
      totalUnclearedTiffins: totalUnclearedTiffins.length ? totalUnclearedTiffins[0].total : 0, // Handle empty results
      clearedSummary: clearedSummary.length
        ? clearedSummary
        : { minClearedDate: null, maxClearedDate: null, paymentDate:null, totalClearedTiffins: 0 }, // Handle no cleared data
    });
  } catch (error) {
    console.error("Error fetching tiffins:", error);
    return NextResponse.json({ error: "Error fetching tiffins" }, { status: 500 });
  }
}

// ✅ POST: Add a new tiffin record (Prevent duplicates)
export async function POST(req: Request) {
  try {
    const { userId, date, tiffinCount } = await req.json();

    // Validate required fields
    if (!userId || !date || !tiffinCount) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    await dbConnect();

    // Check if a record already exists for this user and date
    const existingTiffin = await Tiffin.findOne({ userId, date });

    if (existingTiffin) {
      return NextResponse.json({ error: "Tiffin entry for this date already exists" }, { status: 400 });
    }

    // Create a new tiffin entry (Unpaid by default)
    const newTiffin = new Tiffin({
      userId,
      date,
      tiffinCount,
      isPaid: false, // Default to unpaid
      paymentDate: null, // No payment date initially
    });

    await newTiffin.save();

    return NextResponse.json({ success: true, data: newTiffin }, { status: 201 });
  } catch (error) {
    console.error("Error adding tiffin:", error);
    return NextResponse.json({ error: "Error adding tiffin" }, { status: 500 });
  }
}

// ✅ PATCH: Clear all uncleared tiffins for a user
export async function PATCH(req: Request) {
  try {
    const { userId } = await req.json();

    // Validate input
    if (!userId) {
      return NextResponse.json({ error: "User ID is required" }, { status: 400 });
    }

    await dbConnect();

    // Find uncleared tiffins for the user
    const unclearedTiffins = await Tiffin.find({ userId, isPaid: false });

    if (unclearedTiffins.length === 0) {
      return NextResponse.json({ message: "No uncleared tiffins found." }, { status: 200 });
    }

    // Set the current date as the paymentDate
    const paymentDate = new Date().toISOString();

    // Update all uncleared tiffins to cleared
    const result = await Tiffin.updateMany(
      { userId, isPaid: false },
      { $set: { isPaid: true, paymentDate } }
    );

    return NextResponse.json({
      success: true,
      message: `${result.modifiedCount} tiffins cleared.`,
      paymentDate,
    });
  } catch (error) {
    console.error("Error clearing tiffins:", error);
    return NextResponse.json({ error: "Error clearing tiffins" }, { status: 500 });
  }
}