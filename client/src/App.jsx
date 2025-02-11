import { Header, Footer, LCard } from "./component/Index";
import { Outlet } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F5F0E1] text-[#4E342E] font-serif">
    
      <div className="fixed top-0 left-0 w-full z-10">
        <Header />
      </div>

   
      <div className="flex flex-grow pt-[80px]">
        {" "}
     
        <div className="w-full md:w-1/4 bg-gray-100 shadow-md p-6 rounded-[9%]  mt-6 h-[65%] ml-3  ">
          <LCard />
        </div>
     
        <main className="w-full md:w-3/4 p-6 overflow-y-auto ">
          <Outlet />
        </main>
      </div>

      <Footer />
    </div>
  );
}

export default App;