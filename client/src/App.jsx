import { useState } from "react";
import { Header, Footer } from "./component/Index";

import { Outlet } from "react-router-dom";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen flex flex-col bg-[#F5F0E1] text-[#4E342E] font-serif">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="flex-grow p-2">
        <Outlet />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
