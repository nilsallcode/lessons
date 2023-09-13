import { useState, useEffect } from "react";
import { getProducts } from "../lib/queries/getProducts";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";

export default function Home () {

    const { data: products, isLoading, isError } = useQuery({
        queryKey: ['products'],
        queryFn: getProducts
    });

    if (isLoading) return <p>Loading...</p>

    return (
        <div>
            <h1 className="text-2xl">Products</h1>
            <div className="flex flex-col gap-4">
                {isError ? <p>There was an error loading the products</p> : (
                    <>
                        {products.products.map((product, index) => (
                            <div className="flex justify-between items-center bg-gray-300 p-4 rounded-xl">
                                <h3 className="text-xl">{product.title}</h3>
                                <Link to={"/product/" + product.id}>
                                    View Product
                                </Link>
                            </div>
                        ))}
                    </>
                )}
            </div>
        </div>
    );
}