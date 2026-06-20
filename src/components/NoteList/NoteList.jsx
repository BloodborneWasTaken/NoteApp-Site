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
}) {
  return (
    <div>
      <div className="flex flex-col overflow-y-scroll overflow-x-hidden bg-white w-[35vw] h-[80vh] rounded-[15px] p-2.5 ">
        <div className="flex justify-between w-[100%] ">
          <p>یادداشت ها</p>
          <p onClick={onCreate} className="bg-[#7a00b2] text-center w-[80px] h-[40px] text-white rounded-[10px] pt-1 cursor-pointer">
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
