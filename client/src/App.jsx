import { Header, Footer, LCard } from "./component/Index";
import { Outlet } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F5F0E1] text-[#4E342E] font-serif">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <div className="flex flex-grow">
        {/* LCard on the left */}
        <div className="w-1/4 bg-gray-100 shadow-md h-full p-6">
          <LCard />
        </div>

        {/* Dynamic Content (Outlet) */}
        <main className="w-3/4 p-6 overflow-y-auto">
          <Outlet />
        </main>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
