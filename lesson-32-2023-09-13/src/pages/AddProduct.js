import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { postProduct } from "../lib/mutations/postProduct";

export default function AddProduct () {

    const [formData, setFormData] = useState("");

    const newProduct = useMutation({
        mutationFn: () => postProduct({ 
            title: formData 
        }),
    });

    return (
        <div className="flex flex-col gap-6">
            <h1 className="text-2xl">
                Add Product
            </h1>
            {newProduct.isLoading ? <p>Adding product ... </p> : null}
            {newProduct.isSuccess ? <p className="bg-green-500 text-white p-2 rounded-xl">Success! New product {newProduct.data.title} has been added.</p> : null}
            <div className="flex flex-col gap-4">
                <input value={formData} onChange={(e) => setFormData(e.target.value)} placeholder="Title" className="p-2 border-2 border-gray-300" />
                <button onClick={() => newProduct.mutate()} className="bg-red-500 p-2 text-white rounded-xl">
                    Add Product
                </button>
            </div>
        </div>
    );
}