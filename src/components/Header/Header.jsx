import React, { useContext, useEffect, useState } from "react";
import NoteList from "../NoteList/NoteList";
import Editor from "../Editor/Editor";
import { NoteContext } from "../../Context/Context";

function Header() {
  const { state, dispatch } = useContext(NoteContext);

  return (
    <div
      className={`font-semibold p-4 ml-2.5 transition-colors duration-300 ${
        state.theme === "dark"
          ? "bg-gray-900 text-white"
          : "bg-white text-black"
      }`}
    >
      <div
        className={`flex items-center justify-between w-[75vw] rounded-[20px] pl-2.5 pt-2.5 pb-2.5 transition-colors duration-300 ${
          state.theme === "dark" ? "bg-gray-800" : "bg-white"
        }`}
      >
        <div>
          <p
            className={`${state.theme === "dark" ? "text-white" : "text-black"}`}
          >
            دفترچه یادداشت
          </p>
          <p className="font-light text-sm">مدیریت یادداشت ها</p>
        </div>

        <button
          dir="ltr"
          onClick={() => dispatch({ type: "TOGGLE_THEME" })}
          className={`relative w-16 h-8 flex items-center rounded-full p-1 transition-colors duration-300 ${
            state.theme === "light" ? "bg-slate-300" : "bg-gray-700"
          }`}
        >
          <div
            className={`w-6 h-6 flex items-center justify-center rounded-full shadow-md transform transition-transform duration-300 ${
              state.theme === "light"
                ? "translate-x-0 bg-yellow-400"
                : "translate-x-8 bg-gray-900"
            }`}
          >
            {state.theme === "light" ? (
              <span className="text-xs">☀️</span>
            ) : (
              <span className="text-xs">🌙</span>
            )}
          </div>
        </button>

        <input
          className={`w-[12vw] rounded-[15px] pl-1.5 pt-2.5 pb-2.5 mr-5 transition-colors duration-300 ${
            state.theme === "dark"
              ? "bg-gray-700 text-white placeholder-gray-400"
              : "bg-[#b2b2b236] text-black placeholder-gray-600"
          }`}
          type="text"
          placeholder="جست وجو..."
          onChange={(e) =>
            dispatch({ type: "SET_SEARCH", payloud: e.target.value })
          }
          value={state.search}
        />
      </div>
      <div className="flex gap-2 w-[75vw] mt-4 h-[80vh] ">
        <NoteList />
        <Editor
          note={state.selectedNote}
        />
      </div>
    </div>
  );
}

export default Header;
