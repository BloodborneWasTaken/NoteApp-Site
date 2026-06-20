import React, { useEffect, useState } from "react";
import NoteList from "../NoteList/NoteList";
import Editor from "../Editor/Editor";

function Header({
  notes,
  setNotes,
  onSelect,
  note,
  selected,
  onSave,
  onDelete,
  onCreate,
}) {
  return (
    <div className="font-semibold p-4 ml-2.5">
      <div className="flex items-center justify-between w-[75vw] rounded-[20px] bg-white pl-2.5 pt-2.5 pb-2.5">
        <p>
          دفترچه یادداشت
          <br />
          <p className="font-light">مدیریت یادداشت ها</p>
        </p>
        <input
          className="bg-[#b2b2b236] w-[12vw] rounded-[15px] pl-1.5 pt-2.5 pb-2.5 mr-5"
          type="text"
          placeholder="جست وجو..."
        />
      </div>
      <div className="flex gap-2 w-[75vw] mt-4 h-[80vh] ">
        <NoteList
          note={note}
          onDelete={onDelete}
          notes={notes}
          setNotes={setNotes}
          onSelect={onSelect}
          selected={selected}
        />
        <Editor
          note={note}
          onDelete={onDelete}
          notes={notes}
          setNotes={setNotes}
          onSave={onSave}
          onCreate={onCreate}
        />
      </div>
    </div>
  );
}

export default Header;
