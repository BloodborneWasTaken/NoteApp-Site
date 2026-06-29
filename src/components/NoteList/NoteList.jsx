import React, { useContext } from "react";
import Card from "../Card/Card";
import { NoteContext } from "../../Context/Context";

function NoteList() {
  const { state, dispatch } = useContext(NoteContext);

  const isDark = state.theme === "dark";

  return (
    <div className="transition-colors duration-300">
      <div
        className={`flex flex-col overflow-y-scroll overflow-x-hidden w-[35vw] h-[80vh] rounded-[15px] p-2.5 transition-colors duration-300 
        ${isDark ? "bg-slate-900 scrollbar-thumb-black text-slate-100" : "bg-white scrollbar-thumb-slate-100 text-slate-900"}`}
      >
        <div className="flex justify-between items-center w-[100%] mb-2">
          <p
            className={`font-bold ${isDark ? "text-slate-300" : "text-slate-700"}`}
          >
            یادداشت‌ها
          </p>
          <button
            onClick={() => dispatch({ type: "CREATE_NOTE" })}
            className="bg-[#7a00b2] hover:bg-[#5e008a] text-center w-[80px] h-[40px] text-white rounded-[10px] flex items-center justify-center cursor-pointer transition-colors shadow-md"
          >
            + جدید
          </button>
        </div>

        <div className="flex flex-col gap-2">
          {state.notes.map((note) => (
            <Card
              key={note.id}
              note={note}
              isActive={state.selectedNote?.id === note.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default NoteList;
