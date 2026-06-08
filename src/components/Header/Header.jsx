import React from "react";

function Header() {
  return (
    <div className="font-semibold p-4 ml-2.5">
      <div className="flex items-center justify-between w-[75vw] rounded-[20px] bg-white pl-2.5 pt-2.5 pb-2.5">
        <p>
          دفترچه یادداشت
          <br />
          <p className="font-light">مدیریت یادداشت ها</p>
        </p>
        <input
          className="bg-[#49f0ff56] w-[12vw] rounded-[15px] pl-1.5 pt-2.5 pb-2.5 mr-5"
          type="text"
          placeholder="جست وجو..."
        />
      </div>
      <div className="flex gap-2 w-[75vw] mt-4 h-[80vh] ">
        <div className="flex flex-col bg-white w-[25vw] h-[80vh] rounded-[15px] p-2.5 ">
          <div className="flex justify-between w-[100%] ">
            <p>یادداشت ها</p>
            <p className="bg-[#7a00b2] text-center w-[80px] h-[40px] text-white rounded-[10px] pt-1">
              + جدید
            </p>
          </div>
          <div className="mt-2.5 border-2 border-[#b2b2b2] rounded-[10px] p-1.5">
            <div className="flex w-[100%] justify-between p-1.5">
              <p className="bg-[#d8d8d8] rounded-[15px] w-[50px] h-7 text-center">
                ایده
              </p>
              <p>📌</p>
            </div>
            <p>ایده پروژه</p>
            <p className="font-light">
              {" "}
              ساخت اپلیکیشن مدیریت با React و Tailwind
            </p>

            <p className="font-light">1403/3/7</p>
          </div>
          <div className="mt-2.5 border-2 border-[#b2b2b2] rounded-[10px] p-1.5">
            <div className="flex w-[100%] justify-between p-1.5">
              <p className="bg-[#d8d8d8] rounded-[15px] w-[70px] h-7 text-center">
                آموزش
              </p>
            </div>
            <p>مطالب کلاس</p>
            <p className="font-light"> آموزش props و State در React</p>

            <p className="font-light">1403/6/10</p>
          </div>
          <div className="mt-2.5 border-2 border-[#b2b2b2] rounded-[10px] p-1.5">
            <div className="flex w-[100%] justify-between p-1.5">
              <p className="bg-[#d8d8d8] rounded-[15px] w-[50px] h-7 text-center">
                ایده
              </p>
              <p>📌</p>
            </div>
            <p>ایده پروژه</p>
            <p className="font-light">
              {" "}
              ساخت اپلیکیشن مدیریت با React و Tailwin
            </p>

            <p className="font-light">1403/3/7</p>
          </div>
        </div>
        <div className="flex flex-col bg-white w-[50vw] h-[80vh] rounded-[15px] p-4 ">
          <dir className="flex justify-between">
            <p className="font-light">
              مشاهده یادداشت
              <br />
              <p className="font-bold text-2xl">test 1</p>
            </p>
            <ul className="flex gap-1">
              <li className="bg-[#7a00b2] text-center w-[70px] h-[30px] text-white rounded-[10px]">
                ذخیره
              </li>
              <li className="bg-red-200 text-center w-[70px] h-[30px] text-red-600 rounded-[10px]">
                حذف
              </li>
            </ul>
          </dir>
          <p className="font-light mt-1">دسته بندی: test | تاریخ: test</p>
          <input
            type="text"
            className="bg-[#49f0ff56] pl-2.5 pb-7 rounded-[15px] mt-5 w-[100%] h-[20%]"
          />
          <input
            type="text"
            className="bg-[#49f0ff56] pl-2.5 pb-40 rounded-[15px] mt-3 w-[100%] h-[50%]"
          />
        </div>
      </div>
    </div>
  );
}

export default Header;
