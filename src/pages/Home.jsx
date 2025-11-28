
import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const buttons = [
    { text: "Book a Table", color: "bg-sky-500", emoji: "🍽️", path: "/book-table" },
    { text: "Order by the Beach", color: "bg-teal-600", emoji: "🍸" },
    { text: "Special Offers", color: "bg-orange-500", emoji: "🔥" },
    { text: "Book an Umbrella", color: "bg-gray-200 text-gray-800", emoji: "🏖️", path: "/book-umbrella" },
    { text: "Book a Massage", color: "bg-purple-600", emoji: "🌿" },
    { text: "Daily Events", color: "bg-lime-500 text-gray-900", emoji: "📅" },
  ];

  const handleButtonClick = (path) => {
    if (path) {
      navigate(path);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Header */}
      <header className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-center py-5 text-2xl font-bold shadow-lg sticky top-0 z-10 rounded-b-2xl">
        Welcome to Taverna Kolios
      </header>

      {/* Grid */}
      <main className="grid grid-cols-2 gap-5 p-5 pb-10">
  {buttons.map((btn, i) => (
    <div
      key={i}
      className={`${btn.color} rounded-3xl shadow-lg flex flex-col items-center justify-center h-[200px] text-white text-center text-lg font-semibold transform hover:scale-105 hover:brightness-110 transition-all duration-300`}
      onClick={() => handleButtonClick(btn.path)}
    >
      <span className="text-4xl mb-3">{btn.emoji}</span>
      {btn.text}
    </div>
  ))}
</main>
    </div>
  );
};

export default Home;
