import Home from "./pages/Home";
import AddProduct from "./pages/AddProduct";
import { Link, Route, Routes } from "react-router-dom";
import Product from "./pages/Product";

function App() {
  return (
    <main className="px-24 pt-8">
      <nav className="flex gap-4 p-4 bg-red-500 text-white mb-8">
        <Link to="/">
          Home
        </Link>
        <Link to="/add-product">
          Add Product
        </Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-product" element={<AddProduct />} />
        <Route path="/product/:id" element={<Product />} />
      </Routes>
    </main>
  );
}

export default App;
