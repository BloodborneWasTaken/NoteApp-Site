import React from "react";

function Card({ note, onSelect, isActive, onDelete, theme }) {
  const isDark = theme === "dark";

  const handleDelete = (e) => {
    e.stopPropagation();
    onDelete(note.id);
  };

  const containerStyles = isActive
    ? "mt-2.5 border-2 border-transparent bg-indigo-400 rounded-[10px] p-1.5 cursor-pointer shadow-lg shadow-indigo-500 text-white"
    : isDark
      ? "mt-2.5 border-2 border-slate-700 bg-slate-800 rounded-[10px] p-1.5 cursor-pointer shadow-md text-slate-100" // Dark Mode Unselected
      : "mt-2.5 border-2 border-[#b2b2b2] bg-white rounded-[10px] p-1.5 cursor-pointer shadow-lg shadow-[#b2b2b2] text-gray-800"; // Light Mode Unselected

  const categoryStyles = isActive
    ? "bg-indigo-600 rounded-[15px] w-[60px] h-7 text-center flex items-center justify-center text-white"
    : isDark
      ? "bg-slate-700 rounded-[15px] w-[60px] h-7 text-center flex items-center justify-center text-slate-300" // Dark Mode Badge
      : "bg-[#d8d8d8] rounded-[15px] w-[60px] h-7 text-center flex items-center justify-center text-gray-600"; // Light Mode Badge

  const titleText = isDark ? "text-white" : "text-gray-900";
  const snippetText = isDark ? "text-white" : "text-gray-600";
  const dateText = isDark ? "text-white" : "text-gray-400";

  return (
    <div
      onClick={onSelect}
      className={`${containerStyles} transition-all duration-200 ease-in-out`}
    >
      <div className="flex w-full justify-between items-start p-1.5">
        <h3 className={categoryStyles}>{note.category}</h3>

        <button
          onClick={handleDelete}
          className={`text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded transition-colors
            ${
              isDark
                ? "bg-red-900/30 text-red-400 hover:bg-red-600 hover:text-white"
                : "bg-red-50 text-red-500 hover:bg-red-500 hover:text-white"
            }`}
        >
          Delete
        </button>
      </div>

      <div className="mt-1">
        <p className={`font-bold break-all leading-tight ${titleText}`}>
          {note.title}
        </p>

        <p className={`font-light text-sm break-all mt-1 ${snippetText}`}>
          {note.snippet}
        </p>

        <p className={`font-light text-xs mt-3 ${dateText}`}>{note.date}</p>
      </div>
    </div>
  );
}

export default Card;
