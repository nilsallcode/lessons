import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import AddCountry from "./pages/AddCountry";
import Country from "./pages/Country";
import UpdateCountry from "./pages/UpdateCountry";

import Navbar from "./components/Navbar";

function App() {
  return (
    <main className="px-24 py-8">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-country" element={<AddCountry />} />
        <Route path="/country/:id" element={<Country />} />
        <Route path="/update-country/:id" element={<UpdateCountry />} />
      </Routes>
    </main>
  );
}

export default App;
