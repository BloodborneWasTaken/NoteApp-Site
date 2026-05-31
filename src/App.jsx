import Nav from "./components/Nav/Nav";
function App() {
  return (
    <div className="p-[40px] font-normal">
      <Nav />
      <h1 className="flex justify-center text-[100px] mt-3">
        Browse everything.
      </h1>
      <div className=" flex justify-center bg-[#8E9C78] w-[1200px] h-[362px] rounded-[30px] mt-[50px]"></div>
    </div>
  );
}

export default App;
