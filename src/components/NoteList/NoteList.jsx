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
}) {
  if (!note) {
    return (
      <div className="flex items-center bg-white w-[39.5vw] h-[80vh] rounded-[15px] p-4 ">
        <p className="text-red-500 font-extraboldbold text-[50px] mr-[5%]">
          یادداشتی وجود ندارد
        </p>
      </div>
    );
  }
  return (
    <div>
      <div className="flex flex-col overflow-y-scroll bg-white w-[35vw] h-[80vh] rounded-[15px] p-2.5 ">
        <div className="flex justify-between w-[100%] ">
          <p>یادداشت ها</p>
          <p className="bg-[#7a00b2] text-center w-[80px] h-[40px] text-white rounded-[10px] pt-1">
            + جدید
          </p>
        </div>
        {notes.map((note) => (
          <Card
            key={note.id}
            note={note}
            onSelect={() => onSelect(note)}
            onDelete={() => onDelete(note.id)}
            isActive={selected?.id === note.id}
          />
        ))}
      </div>
    </div>
  );
}

export default NoteList;
