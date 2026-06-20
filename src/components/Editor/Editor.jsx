import React, { useEffect, useState } from "react";

function Editor({ notes, setNotes, note, onSave, onDelete }) {
  const [title, setTitle] = useState(note.title);
  const [snippet, setSnippet] = useState(note.snippet);

  useEffect(() => {
    setTitle(note.title);
    setSnippet(note.snippet);
  }, [note]);

  const handleSave = () => {
    const updatedNote = {
      ...note,
      title,
      snippet,
    };
    onSave(updatedNote);
  };

  const handleDelete = () => {
    onDelete(note.id);
  };

  if (!note) {
    return (
      <div className="flex items-center bg-white w-[39.5vw] h-[80vh] rounded-[15px] p-4 ">
        <p className="text-red-500 font-extraboldbold text-[50px] mr-[5%]">یادداشتی وجود ندارد</p>
      </div>
    );
  }

  return (
    <div>
      <div className="flex flex-col bg-white w-[39.5vw] h-[80vh] rounded-[15px] p-4 overflow-x-scroll ">
        <dir className="flex justify-between">
          <p className="font-light">
            مشاهده یادداشت
            <br />
            <p className="font-bold text-2xl">{note.title}</p>
          </p>
          <ul className="flex gap-1">
            <li
              onClick={handleSave}
              className="bg-[#7a00b2] text-center w-[70px] h-[30px] text-white rounded-[10px] cursor-pointer"
            >
              ذخیره
            </li>
            <li
              onClick={handleDelete}
              className="bg-red-200 text-center w-[70px] h-[30px] text-red-600 rounded-[10px] cursor-pointer"
            >
              حذف
            </li>
          </ul>
        </dir>
        <p className="font-light mt-1">
          دسته بندی: {note.category} | تاریخ: {note.date}
        </p>
        <textarea
          name=""
          id=""
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="bg-[#b2b2b236] pl-2.5 pb-7 rounded-[15px] mt-5 w-[100%] h-[20%] resize-none"
        ></textarea>
        <textarea
          name=""
          id=""
          value={snippet}
          onChange={(e) => setSnippet(e.target.value)}
          className="bg-[#b2b2b236] pl-2.5 pt-2 rounded-[15px] mt-3 w-[100%] h-[50%] resize-none"
        ></textarea>
      </div>
    </div>
  );
}

export default Editor;
