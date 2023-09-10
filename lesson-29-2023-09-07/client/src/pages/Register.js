import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Register () {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email: "",
        password: "",
        fullName: ""
    });
    const [error, setError] = useState("");

    const register = async () => {

        await fetch("http://localhost:4000/register", {
            method: "POST",
            body: JSON.stringify(formData),
            headers: {
                "Content-Type": "application/json"
            }
        }).then( async (data) => {

            const response = await data.json();

            if (response.success) {
                navigate("/login");
            } else if (response.error) {
                setError(response.error);
            } else {
                setError("Something went wrong.");
            }

        });

    };

    const handleFormChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value
        }));
    };

    return (
        <main className="flex flex-col gap-6 px-24 py-8">
            <h2 className="text-2xl font-semibold">Register</h2>
            <p>
                Register a new account!
            </p>
            {error ?
                <p className="bg-red-500 text-white p-4 rounded-xl">
                    {error}
                </p> : null
            }
            <input name="email" value={formData.email} onChange={handleFormChange} placeholder="Email" type="email" className="border-2 border-gray-200 p-2 rounded-xl" />
            <input name="password" value={formData.password} onChange={handleFormChange} placeholder="Password" type="password" className="border-2 border-gray-200 p-2 rounded-xl" />
            <input name="fullName" value={formData.fullName} onChange={handleFormChange} placeholder="Full Name" type="text" className="border-2 border-gray-200 p-2 rounded-xl" />
            <button onClick={register} className="bg-black text-white p-2 rounded-xl">Register now!</button>
        </main>
    );
}