import React from "react";
import Card from "../Card/Card";

function NoteList({
  notes,
  setNotes,
  onSelect,
  note,
  selected,
  onSave,
  onDelete,
  onCreate,
  theme,
}) {
  // تشخیص حالت دارک
  const isDark = theme === "dark";

  return (
    <div className="transition-colors duration-300">
      <div
        className={`flex flex-col overflow-y-scroll overflow-x-hidden w-[35vw] h-[80vh] rounded-[15px] p-2.5 transition-colors duration-300 
        ${isDark ? "bg-slate-900 text-slate-100" : "bg-white text-slate-900"}`}
      >
        <div className="flex justify-between items-center w-[100%] mb-2">
          <p
            className={`font-bold ${isDark ? "text-slate-300" : "text-slate-700"}`}
          >
            یادداشت‌ها
          </p>
          <button
            onClick={onCreate}
            className="bg-[#7a00b2] hover:bg-[#5e008a] text-center w-[80px] h-[40px] text-white rounded-[10px] flex items-center justify-center cursor-pointer transition-colors shadow-md"
          >
            + جدید
          </button>
        </div>

        <div className="flex flex-col gap-2">
          {notes.map((note) => (
            <Card
              key={note.id}
              note={note}
              onSelect={() => onSelect(note)}
              onDelete={() => onDelete(note.id)}
              isActive={selected?.id === note.id}
              theme={theme}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default NoteList;
