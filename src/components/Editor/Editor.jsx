import React, { useContext, useEffect, useState } from "react";
import { NoteContext } from "../../Context/Context";

function Editor({ onSave, note, onDelete }) {
  const [title, setTitle] = useState(note?.title || "");
  const [snippet, setSnippet] = useState(note?.snippet || "");
  const [category, setCategory] = useState(note?.category || "");
  const { state, dispatch } = useContext(NoteContext);

  const isDark = state.theme === "dark";

  useEffect(() => {
    if (note) {
      setTitle(note.title);
      setSnippet(note.snippet);
      setCategory(note.category);
    }
  }, [note]);

  useEffect(() => {
    if (note) {
      const updatedNote = {
        ...note,
        title,
        snippet,
        category,
      };
      dispatch({
        type: "UPDATE_NOTE",
        payloud: updatedNote,
      });
    }
  }, [title, snippet, category]);

  if (!note) {
    return (
      <div
        className={`flex items-center justify-center w-[39.5vw] h-[80vh] rounded-[15px] p-4 transition-colors duration-300 
        ${isDark ? "bg-slate-800" : "bg-white"}`}
      >
        <p
          className={`font-extrabold text-[40px] mr-[5%] ${isDark ? "text-red-400" : "text-red-500"}`}
        >
          یادداشتی وجود ندارد
        </p>
      </div>
    );
  }

  return (
    <div className="transition-colors duration-300">
      <div
        className={`flex flex-col w-[39.5vw] h-[80vh] rounded-[15px] p-4 transition-colors duration-300
        ${isDark ? "bg-slate-900 text-slate-100" : "bg-white text-slate-900"}`}
      >
        <div className="flex justify-between items-start">
          <div className="flex flex-col">
            <p
              className={`font-light ${isDark ? "text-slate-400" : "text-slate-500"}`}
            >
              مشاهده یادداشت
            </p>
            <h3 className="font-bold text-2xl break-all">{title}</h3>
          </div>
        </div>

        <p
          className={`font-light mt-1 ${isDark ? "text-slate-400" : "text-slate-500"}`}
        >
          دسته بندی: {category} | تاریخ: {note.date}
        </p>

        <textarea
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className={`pl-2.5 pb-7 rounded-[15px] mt-5 w-[100%] h-[20vh] resize-none outline-none transition-colors
            ${isDark ? "bg-slate-800 text-white border border-slate-700" : "bg-slate-100 text-black border-transparent"}`}
        ></textarea>

        <select
          className={`pl-4 pb-7 pt-2.5 rounded-[15px] mt-5 w-[25%] h-[10vh] outline-none transition-colors cursor-pointer
            ${isDark ? "bg-slate-800 text-white border border-slate-700" : "bg-slate-100 text-black"}`}
          onChange={(e) => setCategory(e.target.value)}
          value={category}
        >
          <option value="عمومی" className="text-black">
            عمومی
          </option>
          <option value="شخصی" className="text-black">
            شخصی
          </option>
          <option value="کاری" className="text-black">
            کاری
          </option>
          <option value="مطالعه" className="text-black">
            مطالعه
          </option>
        </select>

        <textarea
          value={snippet}
          onChange={(e) => setSnippet(e.target.value)}
          className={`pl-2.5 pt-2 rounded-[15px] mt-3 w-[100%] h-[45vh] resize-none outline-none transition-colors
            ${isDark ? "bg-slate-800 text-white border border-slate-700" : "bg-slate-100 text-black"}`}
        ></textarea>
      </div>
    </div>
  );
}

export default Editor;
