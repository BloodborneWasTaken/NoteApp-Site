function Card({ note, onSelect, isActive, onDelete }) {
  const handleDelete = () => {
    onDelete(note.id);
  };
  return (
    <div onClick={onSelect}>
      <div
        className={`${isActive ? "text-[#ffffff] mt-2.5 border-2 bg-linear-to-br from-amber-500 to-red-500 border-[#ffea00] rounded-[10px] p-1.5 cursor-pointer shadow-lg shadow-[#ffa600]" : "mt-2.5 border-2 border-[#b2b2b2] rounded-[10px] p-1.5 cursor-pointer shadow-lg shadow-[#b2b2b2]"} `}
      >
        <div className="flex w-[100%] justify-between p-1.5 ">
          <p
            className={`${isActive ? "bg-linear-to-br from-amber-500 to-red-500 border-[#ffea00] rounded-[15px] w-[60px] h-7 text-center" : "bg-[#d8d8d8] rounded-[15px] w-[60px] h-7 text-center "}`}
          >
            {note.category}
          </p>
        </div>
        <p>{note.title}</p>
        <p className="font-light"> {note.snippet}</p>
        <p className="font-light">{note.date}</p>
      </div>
    </div>
  );
}

export default Card;
