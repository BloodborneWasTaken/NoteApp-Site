function Sidebar({ theme }) {
  return (
    <div
      className={`flex gap-[20px] flex-col p-4 w-[20vw] h-[100vh] transition-colors duration-300 ${
        theme === "dark" ? "bg-gray-800 text-white" : "bg-white text-black"
      }`}
    >
      <ul className="flex items-center gap-2">
        <li
          className={`text-[30px] text-white font-semibold text-center w-14 h-14 rounded-2xl pt-1 transition-colors duration-300 ${
            theme === "dark"
              ? "bg-linear-to-br from-purple-700 to-purple-900"
              : "bg-linear-to-br from-fuchsia-500 to-fuchsia-900"
          }`}
        >
          N
        </li>
        <li>
          NoteX
          <br />
          React Notes
        </li>
      </ul>
      <ul className="flex justify-between w-full h-[60px] flex-col font-medium">
        <li
          className={`rounded-[5px] pl-1.5 pt-2.5 pb-2.5 cursor-pointer transition-all ${
            theme === "dark" ? "hover:bg-gray-700" : "hover:bg-gray-200"
          }`}
        >
          📄 همه ی یادداشت ها
        </li>
        <li
          className={`rounded-[5px] pl-1.5 pt-2.5 pb-2.5 cursor-pointer transition-all ${
            theme === "dark" ? "hover:bg-gray-700" : "hover:bg-gray-200"
          }`}
        >
          📌 سنجاق شده
        </li>
        <li
          className={`rounded-[5px] pl-1.5 pt-2.5 pb-2.5 cursor-pointer transition-all ${
            theme === "dark" ? "hover:bg-gray-700" : "hover:bg-gray-200"
          }`}
        >
          📁 دسته بندی
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
