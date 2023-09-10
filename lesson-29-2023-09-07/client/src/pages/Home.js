import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Home () {

    const [secretSauces, setSecretSauces] = useState([]);
    const [user, setUser] = useState({});

    const logout = () => {

        localStorage.removeItem("token");
        setSecretSauces([]);
        setUser({});

    }

    useEffect(() => {

        const getSecretSauces = async () => {

            await fetch("http://localhost:4000/get-secret-sauces", {
                method: "GET",
                headers: {
                    "x-access-token": localStorage.getItem("token")
                }
            }).then(async (data) => {

                const response = await data.json();

                if (response.secretSauces) {
                    setSecretSauces(response.secretSauces);
                }

            });

        };

        const getUser = async () => {

            await fetch("http://localhost:4000/current-user", {
                method: "GET",
                headers: {
                    "x-access-token": localStorage.getItem("token")
                }
            }).then(async (data) => {

                const response = await data.json();

                if (response.user) {
                    setUser(response.user);
                }

            });

        };

        getSecretSauces();
        getUser();

    }, []);

    return (
        <main className="flex flex-col gap-6 px-24 py-8">
            <div className="flex justify-between">
                <h1 className="text-4xl font-semibold">
                    The Secret Sauce
                </h1>
                {user.id  ?
                    <Link to="/add-secret-sauce" className="underline font-semibold">Add Sauce</Link>
                    : null
                }
            </div>
            {user.id ? <p>Welcome {user.fullName}! </p> : <p>Login or register an account to see your secret sauces.</p> }
            {user.id ? 
                <>
                {secretSauces.length > 0 ?
                    <div className="flex flex-col gap-6">
                        {secretSauces.map((secret, index) => (
                            <div className="bg-gray-300 p-6 rounded-xl" key={index}>
                                <p>{secret.secretContent}</p>
                            </div>
                        ))}
                    </div>
                    : <p> You have not added any sauces yet. </p>
                }
                </> : null
            }
            <div className="flex gap-4">
                {user.id ? (
                    <button onClick={logout} className="underline font-semibold">Logout</button>
                    ) : (<><Link to="/register" className="underline font-semibold">Register</Link>
                    <p>or</p>
                    <Link to="/login" className="underline font-semibold">Login</Link></>
                )}
                
            </div>
        </main>
    );
}