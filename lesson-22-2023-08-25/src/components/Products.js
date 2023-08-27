import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

function Products () {

    const [products, setProducts] = useState([]);

    useEffect(() => {

        async function fetchProducts () {

            await fetch("https://play-ecom-api.allcodeapp.com/api/products")
                .then(async (data) => {

                    const response = await data.json();
                    setProducts(response);

                });

        }

        fetchProducts();

    }, []);

    return (
        <div className="p-8">
            <h1 className="text-2xl font-semibold mb-4">Products</h1>
            <div className="grid grid-cols-5 gap-6">
                {products.map((product, index) => (
                    <Product product={product} key={index} />
                ))}
            </div>
        </div>
    );
}

function Product ({ product }) {
    return (
        <div className="flex flex-col justify-between gap-4 p-4 bg-gray-300 rounded-xl">
            <img src={product.imgUrl} className="w-full h-[10rem] object-cover" />
            <h3 className="text-xl font-semibold">{product.name}</h3>
            <p>{product.rating} / 5</p>
            <Link to={"/product/" + product.id} className="p-2 bg-blue-500 text-white text-center rounded-xl">
                View Product
            </Link>
        </div>
    );
}

export default Products;