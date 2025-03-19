"use client";
import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import clsx from "clsx";

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
  const [date, setDate] = useState<Date>(new Date());
  const [tiffinData, setTiffinData] = useState<TiffinData>({});
  const [oldTiffinData, setOldTiffinData] = useState<TiffinData>({});
  const [selectedDay, setSelectedDay] = useState<string | null>(null);
  const [tiffinCount, setTiffinCount] = useState<number>(3);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [paymentRecords, setPaymentRecords] = useState<PaymentRecord[]>([]);

  const handleDateClick = (value: Date) => {
    setDate(value);
    const dateKey = value.toISOString().split("T")[0];
    setSelectedDay(dateKey);
    setTiffinCount(tiffinData[dateKey] || 3);
    setIsModalOpen(true);
  };

  const handleTiffinUpdate = () => {
    if (!selectedDay) return;
    setTiffinData((prevData) => ({ ...prevData, [selectedDay]: tiffinCount }));
    setIsModalOpen(false);
  };
  const handleTiffinUpdateNumer = (number:any) => {
    if (!selectedDay) return;
    setTiffinData((prevData) => ({ ...prevData, [selectedDay]: number }));
    setIsModalOpen(false);
  };

  const handleIncrement = () => {
    setTiffinCount((prev) => (prev < 5 ? prev + 1 : prev));
  };

  const handleDecrement = () => {
    setTiffinCount((prev) => (prev > 3 ? prev - 1 : prev));
  };

  const handleClearCount = () => {
    if (Object.keys(tiffinData).length === 0) return;

    const startDate = Object.keys(tiffinData)[0];
    const endDate = Object.keys(tiffinData).slice(-1)[0];
    const totalTiffins = Object.values(tiffinData).reduce((acc, curr) => acc + curr, 0);
    const clearDate = new Date().toISOString().split("T")[0];

    setPaymentRecords([...paymentRecords, { startDate, endDate, totalTiffins, clearDate }]);
    setOldTiffinData((prev) => ({ ...prev, ...tiffinData }));
    setTiffinData({});
  };

  const tileClassName = ({ date }: { date: Date }) => {
    const dateKey = date.toISOString().split("T")[0];
    const isOld = dateKey in oldTiffinData;
    const count = tiffinData[dateKey] || oldTiffinData[dateKey];

    return clsx(
      "p-2 rounded-md",
      count === 1 && (isOld ? "!bg-green-300 !text-gray-700" : "!bg-green-500 !text-white"),
      count === 2 && (isOld ? "!bg-blue-300 !text-gray-700" : "!bg-blue-500 !text-white"),
      count > 2 && (isOld ? "!bg-red-300 !text-gray-700" : "!bg-red-500 !text-white")
    );
  };

  return (
    <div className="p-5 bg-gray-100 min-h-screen flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-6">Tiffin Tracker</h1>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <Calendar onClickDay={handleDateClick} value={date} tileClassName={tileClassName} className="border border-gray-300 rounded-lg p-4" />
      </div>
      <button onClick={handleClearCount} className="mt-4 bg-yellow-500 text-white px-4 py-2 rounded-md shadow-md">
        Clear Count
      </button>
      {isModalOpen && selectedDay && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h2 className="text-lg font-bold mb-4">Select Tiffin Count for {selectedDay}</h2>
            <div className="flex gap-2 justify-center">
            <button onClick={() => handleTiffinUpdateNumer(1)} className="bg-green-500 text-white px-4 py-2">1</button>
            <button onClick={() => handleTiffinUpdateNumer(2)} className="bg-blue-500 text-white px-4 py-2">2</button>
              <button onClick={handleDecrement} className="bg-gray-400 text-white px-4 py-2 rounded-md">-</button>
              <input
                type="number"
                min="3"
                max="5"
                value={tiffinCount}
                readOnly
                className="border p-2 w-20 text-center rounded-md bg-gray-200 cursor-not-allowed"
              />
              <button onClick={handleIncrement} className="bg-gray-400 text-white px-4 py-2 rounded-md">+</button>
            </div>
            <button onClick={handleTiffinUpdate} className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md">Save</button>
            <button onClick={() => setIsModalOpen(false)} className="mt-4 text-red-500">Close</button>
          </div>
        </div>
      )}
      <div className="mt-6 text-lg font-semibold">Total Tiffins: {Object.values(tiffinData).reduce((acc, curr) => acc + curr, 0)}</div>
      <div className="mt-6 w-full max-w-3xl">
        <h2 className="text-xl font-bold mb-4">Payment Records</h2>
        <table className="w-full bg-white shadow-md rounded-lg overflow-hidden">
          <thead className="bg-gray-200">
            <tr>
              <th className="p-3">Start Date</th>
              <th className="p-3">End Date</th>
              <th className="p-3">Total Tiffins</th>
              <th className="p-3">Clear Date</th>
            </tr>
          </thead>
          <tbody>
            {paymentRecords.map((record, index) => (
              <tr key={index} className="border-t">
                <td className="p-3">{record.startDate}</td>
                <td className="p-3">{record.endDate}</td>
                <td className="p-3">{record.totalTiffins}</td>
                <td className="p-3">{record.clearDate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

