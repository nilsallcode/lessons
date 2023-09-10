import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AddSauce () {

    const navigate = useNavigate();

    const [secretSauce, setSecretSauce] = useState("");
    const [error, setError] = useState("");

    const addSecretSauce = async () => {

        await fetch("http://localhost:4000/add-secret-sauce", {
            method: "POST",
            body: JSON.stringify({ secretContent: secretSauce }),
            headers: {
                "Content-Type": "application/json",
                "x-access-token": localStorage.getItem("token")
            }
        }).then( async (data) => {

            const response = await data.json();

            if (response.success) {
                navigate("/");
            } else if (response.error) {
                setError(response.error);
                setSecretSauce("");
            } else {
                setError("Something went wrong with your request.");
            }

        });

    };

    return (
        <main className="flex flex-col gap-6 px-24 py-8">
            <h2 className="text-2xl font-semibold">Add Sauce</h2>
            <p>
                Add a secret sauce to your account.
            </p>
            {error ?
                <p className="bg-red-500 text-white p-4 rounded-xl">
                    {error}
                </p> : null
            }
            <input name="secretSauce" value={secretSauce} onChange={(e) => (setSecretSauce(e.target.value))} placeholder="Your Super Secret Sauce ...." type="text" className="border-2 border-gray-200 p-2 rounded-xl" />
            <button onClick={addSecretSauce} className="bg-black text-white p-2 rounded-xl">Add Secret Sauce!</button>
        </main>
    );
}