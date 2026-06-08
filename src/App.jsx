import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
function App() {
  return (
    <div className="font-normal bg-[#49f0ff56] flex">
      <div>
        <Sidebar />
      </div>
      <div>
        <Header />
      </div>
    </div>
  );
}

export default App;
