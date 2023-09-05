import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";

export default function Country () {

    const navigate = useNavigate();

    const { id } = useParams();

    const [country, setCountry] = useState({});

    const deleteCountry = async () => {

        await fetch("http://localhost:4000/delete-country/" + id, {
            method: "delete",
        }).then( async (data) => {

            const response = await data.json();

            if (response.success) {
                navigate("/");
            }

        });

    };

    useEffect(() => {

        const getCountry = async () => {

            await fetch("http://localhost:4000/get-country/" + id)
                .then(async (data) => {

                    const response = await data.json();
                    setCountry(response);

                });

        };

        getCountry();

    }, []);

    return (
        <div className="flex flex-col gap-6 pt-8">
            <img src={country.imgUrl} className="w-full h-64 object-cover rounded-xl" />
            <div className="flex justify-between items-center">
                <h1 className="text-4xl font-semibold">
                    {country.name}
                </h1>
                <div className="flex gap-2">
                    <button onClick={deleteCountry} className="bg-red-500 py-2 px-4 text-white rounded-xl">Delete</button>
                    <Link to={"/update-country/" + country.id} className="bg-blue-500 py-2 px-4 text-white rounded-xl">Edit</Link>
                </div>
            </div>
            <p>
                {country.description}
            </p>
        </div>
    );
}