"use client";
import { useState, useEffect } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import clsx from "clsx";
import PaymentTimeline from "@/components/PaymentTimeline";
import { useAppDispatch, useAppSelector } from "@/lib/store/hooks";
import { fetchTiffinData } from "@/lib/store/slices/tiffinSlice";
import GoogleLoginButton from "@/components/auth";
import { useSelector } from "react-redux";
import { RootState } from "@/lib/store/store";

interface TiffinData {
  [key: string]: number;
}

interface PaymentRecord {
  startDate: string;
  endDate: string;
  totalTiffins: number;
  clearDate: string;
}

export default function TiffinTracker() {
  const dispatch = useAppDispatch();
  // Get data from Redux store (fetched via our thunk)
  const {
    unclearedTiffins,
    clearedTiffins,
    allTiffins,
    totalTiffins,
    totalUnclearedTiffins,
    clearedSummary,
    loading,
    error,
  } = useAppSelector((state) => state.tiffin);

  // Local state for new/updated tiffin data and UI
  const [date, setDate] = useState<Date>(new Date());
  const [tiffinData, setTiffinData] = useState<TiffinData>({});
  const [oldTiffinData, setOldTiffinData] = useState<TiffinData>({});
  const [selectedDay, setSelectedDay] = useState<string | null>(null);
  const [tiffinCount, setTiffinCount] = useState<number>(3);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [paymentRecords, setPaymentRecords] = useState<PaymentRecord[]>([]);

  // Fetch tiffin data on mount (and whenever userId changes)
  const userId = useSelector((state: RootState) => state.auth.id);

  useEffect(() => {
    dispatch(fetchTiffinData(userId));
    alert(userId)
  }, [dispatch, userId]);

  const handleDateClick = (value: Date) => {
    setDate(value);
    alert(date)
    const dateKey = value.toISOString().split("T")[0];
    setSelectedDay(dateKey);
    // Set tiffinCount from local state if available, or default to 3.
    setTiffinCount(tiffinData[dateKey] || 3);
    setIsModalOpen(true);
  };

  // Called when user saves a new tiffin count for a day via POST API
  const handleTiffinUpdate = async () => {
    if (!selectedDay) return;
    try {
      const res = await fetch("/api/tiffins", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          userId,
          date: selectedDay,
          tiffinCount,
        }),
      });
      const data = await res.json();
      if (res.ok) {
        // Update local state and refetch from backend
        setTiffinData((prev) => ({ ...prev, [selectedDay]: tiffinCount }));
        dispatch(fetchTiffinData(userId));
        setIsModalOpen(false);
      } else {
        console.error("Error updating tiffin:", data.error);
      }
    } catch (error) {
      console.error("Error updating tiffin:", error);
    }
  };

  const handleTiffinUpdateNumer = async (number: number) => {
    if (!selectedDay) return;
    try {
      const res = await fetch("/api/tiffins", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          userId,
          date: selectedDay,
          tiffinCount: number,
        }),
      });
      const data = await res.json();
      if (res.ok) {
        // Update local state and refetch from backend
        setTiffinData((prev) => ({ ...prev, [selectedDay]: tiffinCount }));
        dispatch(fetchTiffinData(userId));
        setIsModalOpen(false);
      } else {
        console.error("Error updating tiffin:", data.error);
      }
    } catch (error) {
      console.error("Error updating tiffin:", error);
    }
  };

  const handleIncrement = () => {
    setTiffinCount((prev) => (prev < 5 ? prev + 1 : prev));
  };

  const handleDecrement = () => {
    setTiffinCount((prev) => (prev > 3 ? prev - 1 : prev));
  };

  // Called when user clicks "Clear Count" to mark all uncleared tiffins as cleared via PATCH API
  const handleClearCount = async () => {
    if (Object.keys(tiffinData).length === 0) return;
    try {
      const res = await fetch("/api/tiffins", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userId }),
      });
      const data = await res.json();
      if (res.ok) {
        // For UI: record the payment locally
        const keys = Object.keys(tiffinData);
        const startDate = keys[0];
        const endDate = keys[keys.length - 1];
        const total = Object.values(tiffinData).reduce((acc, curr) => acc + curr, 0);
        const clearDate = new Date().toISOString().split("T")[0];
        setPaymentRecords((prev) => [...prev, { startDate, endDate, totalTiffins: total, clearDate }]);
        // Move cleared data to oldTiffinData and reset local tiffinData
        setOldTiffinData((prev) => ({ ...prev, ...tiffinData }));
        setTiffinData({});
        // Refetch updated data from the backend
        dispatch(fetchTiffinData(userId));
      } else {
        console.error("Error clearing tiffins:", data.error);
      }
    } catch (error) {
      console.error("Error clearing tiffins:", error);
    }
  };

  const tileClassName = ({ date }: { date: Date }) => {
    const dateKey = date.toISOString().split("T")[0]; // Convert React-Calendar's date to YYYY-MM-DD
  
    // Get all tiffin records for this date
    const tiffinRecords = allTiffins.filter((record) => {
      const recordDateKey = new Date(record.date).toISOString().split("T")[0]; // Convert record's date
      return recordDateKey === dateKey;
    });
  
    if (tiffinRecords.length === 0) return ""; // No record for this date
  
    // Sum all tiffin counts for the date
    const totalTiffinCount = tiffinRecords.reduce((sum, record) => sum + record.tiffinCount, 0);
    
    // Check if all tiffins are paid
    const allPaid = tiffinRecords.every((record) => record.isPaid);
  
    // Define base class
    let className = "p-2 rounded-md ";
  
    // Apply color classes based on tiffinCount and isPaid status
    if (totalTiffinCount === 1) {
      className += allPaid ? "!bg-cyan-300 !text-gray-700 " : "!bg-cyan-500 !text-white ";
    } else if (totalTiffinCount === 2) {
      className += allPaid ? "!bg-purple-300 !text-gray-700 " : "!bg-purple-500 !text-white ";
    } else if (totalTiffinCount >= 3 && totalTiffinCount <= 5) {
      className += allPaid ? "!bg-rose-300 !text-gray-700 " : "!bg-rose-500 !text-white ";
    }
  
    return className.trim(); // Return final class string
  };
  
  
  
  

  useEffect(() => {
    console.log("allTiffins:", allTiffins);
  }, [allTiffins]);
  
  return (
    <div className="p-5 bg-teal-400 min-h-screen flex flex-col items-center justify-center">
      <div className="mb-5 flex justify-end max-w-7xl w-full">
        <GoogleLoginButton />
      </div>
      {/* Header with totals from Redux state */}
      <div className="mb-5 p-4 rounded-lg bg-white max-w-7xl w-full flex justify-between items-center">
        <div className="flex gap-5 items-center">
          <p className="px-5 py-2 border rounded-lg border-teal-600 text-teal-600">
            Total: {totalTiffins}
          </p>
          <p className="px-5 py-2 border rounded-lg border-teal-600 text-teal-600">
            Pending: {totalUnclearedTiffins}
          </p>
        </div>
        <div className="flex gap-5 items-center">
          <div className="bg-cyan-500 text-white py-2 px-5 rounded">1</div>
          <div className="bg-purple-500 text-white py-2 px-5 rounded">2</div>
          <div className="bg-rose-500 text-white py-2 px-5 rounded">3-5</div>
        </div>
      </div>
      <div className="bg-teal-600 flex rounded-lg max-w-7xl w-full">
        <div className="p-6 w-full">
          <h1 className="text-3xl text-white text-center font-bold mb-6">Tiffin Tracker</h1>
          <PaymentTimeline paymentRecords={clearedSummary} />
          <button
            onClick={handleClearCount}
            className="mt-4 bg-white text-black px-4 py-2 font-semibold shadow-md block w-full"
          >
            Clear Count
          </button>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <Calendar
            onClickDay={handleDateClick}
            value={date}
            tileClassName={tileClassName}
            next2Label={null}
            prev2Label={null}
            minDetail="month"
            maxDetail="month"
            className="rounded-lg p-4 custom-calendar"
          />
        </div>
      </div>
      {isModalOpen && selectedDay && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h2 className="text-lg font-bold mb-4">Select Tiffin Count for {selectedDay}</h2>
            <div className="flex gap-2 justify-center items-center">
              <button
                onClick={() => handleTiffinUpdateNumer(1)}
                className="bg-cyan-500 text-white px-4 py-2 rounded"
              >
                1
              </button>
              <button
                onClick={() => handleTiffinUpdateNumer(2)}
                className="bg-purple-500 text-white px-4 py-2 rounded"
              >
                2
              </button>
              <div className="flex">
                <input
                  type="number"
                  min="3"
                  max="5"
                  value={tiffinCount}
                  readOnly
                  className="border-none p-2 w-14 text-center rounded-s text-white cursor-not-allowed remove-arrow bg-rose-500"
                />
                <div className="flex flex-col">
                  <button onClick={handleIncrement} className="text-white px-4 py-0.5 rounded-tr text-xs bg-rose-500">
                    +
                  </button>
                  <button onClick={handleDecrement} className="text-white px-4 py-0.5 rounded-br text-xs bg-rose-500">
                    -
                  </button>
                </div>
              </div>
            </div>
            <button onClick={handleTiffinUpdate} className="mt-4 bg-rose-500 text-white px-4 py-2 rounded-md">
              Save
            </button>
            <button onClick={() => setIsModalOpen(false)} className="ms-4 mt-4 bg-gray-500 text-white px-4 py-2 rounded-md">
              Close
            </button>
          </div>
        </div>
      )}
      {loading && <p className="mt-4 text-white">Loading data...</p>}
      {error && <p className="mt-4 text-red-400">Error: {error}</p>}
    </div>
  );
}
