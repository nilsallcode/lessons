import { Link } from "react-router-dom";

export default function Navbar () {
    return (
        <div className="flex justify-between items-center">
            <Link to="/" className="text-2xl font-semibold">
                Alltravel
            </Link>
            <Link to="/add-country" className="bg-blue-500 text-white px-4 py-2 rounded-xl">
                Add Country
            </Link>
        </div>
    );
}