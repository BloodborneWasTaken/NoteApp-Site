import { useContext, useEffect, useState } from "react";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import { NoteContext } from "./Context/Context";

function App() {
  const { state, dispatch } = useContext(NoteContext);
  return (
    <div
      className={`font-normal flex ${
        state.theme === "dark"
          ? "bg-gray-800 text-white"
          : "bg-slate-100 text-black"
      }`}
    >
      <div>
        <Sidebar />
      </div>

      <div className="flex-1">
        <Header />
      </div>
    </div>
  );
}

export default App;
