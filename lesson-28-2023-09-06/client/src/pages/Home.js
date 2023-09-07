import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Home () {

    const [secret, setSecret] = useState("");

    const logout = () => {

        localStorage.removeItem("token");
        setSecret("");

    }

    useEffect(() => {

        const getSecret = async () => {

            await fetch("http://localhost:4000/secret-sauce", {
                method: "GET",
                headers: {
                    "x-access-token": localStorage.getItem("token")
                }
            }).then(async (data) => {

                const response = await data.json();

                if (response.secretSauce) {
                    setSecret(response.secretSauce);
                }

            });

        };

        getSecret();

    }, []);

    return (
        <main className="flex flex-col gap-6 px-24 py-8">
            <h1 className="text-4xl font-semibold">
                The Secret Sauce
            </h1>
            {secret ?
                <p>{secret}</p>
                : <p> Login to your account to see the secret sauce! </p>
            }
            <div className="flex gap-4">
                {secret ? (
                    <button onClick={logout} className="underline font-semibold">Logout</button>
                    ) : (<><Link to="/register" className="underline font-semibold">Register</Link>
                    <p>or</p>
                    <Link to="/login" className="underline font-semibold">Login</Link></>
                )}
                
            </div>
        </main>
    );
}