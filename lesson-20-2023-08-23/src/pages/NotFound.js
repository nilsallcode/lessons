import { Link } from "react-router-dom";

function NotFound () {
    return (
        <div className="m-8 flex flex-col gap-4">
            <h2 className="text-4xl">Page Not Found</h2>
            <Link to="/" className="underline font-semibold">
                Go back to start
            </Link>
        </div>
    );
}

export default NotFound;