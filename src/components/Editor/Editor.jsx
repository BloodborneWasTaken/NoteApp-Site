import React, { useEffect, useState } from "react";

function Editor({ notes, setNotes, note, onSave, onDelete, theme }) {
  const [title, setTitle] = useState(note?.title || "");
  const [snippet, setSnippet] = useState(note?.snippet || "");
  const [category, setCategory] = useState(note?.category || "");

  // تشخیص اینکه آیا حالت دارک فعال است یا خیر
  const isDark = theme === "dark";

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
      onSave(updatedNote);
    }
  }, [title, snippet, category]);

  const handleDelete = () => {
    onDelete(note.id);
  };

  // حالت زمانی که یادداشتی انتخاب نشده است
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

          <ul className="flex gap-1">
            <li
              onClick={handleDelete}
              className={`text-center w-[70px] h-[30px] flex items-center justify-center rounded-[10px] cursor-pointer transition-colors
                ${isDark ? "bg-red-900/30 text-red-400 hover:bg-red-800" : "bg-red-100 text-red-600 hover:bg-red-200"}`}
            >
              حذف
            </li>
          </ul>
        </div>

        <p
          className={`font-light mt-1 ${isDark ? "text-slate-400" : "text-slate-500"}`}
        >
          دسته بندی: {category} | تاریخ: {note.date}
        </p>

        {/* فیلد عنوان */}
        <textarea
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className={`pl-2.5 pb-7 rounded-[15px] mt-5 w-[100%] h-[20vh] resize-none outline-none transition-colors
            ${isDark ? "bg-slate-800 text-white border border-slate-700" : "bg-slate-100 text-black border-transparent"}`}
        ></textarea>

        {/* انتخاب دسته بندی */}
        <select
          className={`pl-4 pb-7 pt-3.5 rounded-[15px] mt-5 w-[25%] h-[10vh] outline-none transition-colors cursor-pointer
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

        {/* فیلد متن اصلی */}
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
