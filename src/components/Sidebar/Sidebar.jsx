function Sidebar() {
  return (
    <div>
      <div className="flex gap-[20px] bg-black text-white flex-col p-4 w-[20vw] h-[100vh] ">
        <ul className="flex items-center gap-2">
          <li className="text-[30px] font-semibold bg-linear-to-br from-fuchsia-600 to-fuchsia-800 text-center w-14 h-14 rounded-2xl pt-1">
            N
          </li>
          <li>
            NoteX
            <br />
            React Notes
          </li>
        </ul>
        <ul className="flex justify-between w-[403px] h-[60px] flex-col font-medium">
          <li className="hover:bg-gray-900 w-[16vw] rounded-[5px] pl-1.5 pt-2.5 pb-2.5 cursor-pointer transition-all">
            📄 همه ی یادداشت ها
          </li>
          <br />
          <li className="hover:bg-gray-900 w-[16vw] rounded-[5px] pl-1.5 pt-2.5 pb-2.5 cursor-pointer transition-all">
            📌 سنجاق شده
          </li>
          <br />
          <li className="hover:bg-gray-900 w-[16vw] rounded-[5px] pl-1.5 pt-2.5 pb-2.5 cursor-pointer transition-all">
            📁 دسته بندی
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
