import { useContext } from "react";
import CartContext from "../context/CartContext";

function Cart () {

    const [cart, setCart] = useContext(CartContext);

    return (
        <div className="mx-20 my-8">
            <h1 className="text-4xl font-semibold mb-6">Cart</h1>
            <div className="flex flex-col gap-6 p-4 bg-gray-200">

                {!(cart.length > 0) ? 'No products have been added to your cart' : null }

                {cart.map((cartItem, index) => (
                    <div className="flex gap-4 items-center">
                        <img src={cartItem.imgUrl} className="w-[10rem] h-[10rem] object-cover" />
                        <div>
                            <h3 className="text-2xl">{cartItem.name}</h3>
                            <button className="text-red-500 underline">Remove from cart</button>
                        </div>
                    </div>
                ))}

            {(cart.length > 0) ? 
                <button className="bg-blue-500 p-4 text-white rounded-xl text-center">
                    Checkout
                </button>
            : null }

            </div>
        </div>
    );
}

export default Cart;