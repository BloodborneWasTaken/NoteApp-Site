function Nav() {
  return (
    <div>
      <nav className="flex items-center justify-between">
        <ul>
          <li className="text-[30px] font-semibold">Area</li>
        </ul>
        <ul className="flex justify-between w-[403px] h-[60px] items-center font-medium">
          <li>Benefits</li>
          <li>Specifications</li>
          <li>How-to</li>
          <li>Contact Us</li>
        </ul>
        <ul>
          <li className="flex items-center text-white pl-[18px] w-[127px] h-[48px] font-medium rounded-[1000px] bg-[#485C11]">
            Learn More
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Nav;
