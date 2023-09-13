import { useParams } from "react-router-dom";
import { getProduct } from "../lib/queries/getProduct";
import { useQuery } from "@tanstack/react-query";

export default function Product () {

    const { id } = useParams();

    const product = useQuery({
        queryKey: ['product', id],
        queryFn: () => getProduct(id)
    });

    return (
        <div>
            {product.isLoading ? <p>Loading product...</p> : null }
            {product.isError ? <p>There was an error fetching the product.</p> : null}
            {product.isSuccess ? (
                <div>
                    <h1 className="text-2xl">{product.data.title}</h1>
                    <p>
                        {product.data.description}
                    </p>
                    <p>
                        Price: ${product.data.price}
                    </p>
                </div>
            ) : null }
        </div>
    );
}