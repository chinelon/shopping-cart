import Navbar from "./ Navbar";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Cart from "./Cart";

export default function Products() {
    const [quantity, setQuantity] = useState(0);
    const [cart, setCart] = useState([]);
    const { id } = useParams(); // Extracting the product ID from the URL parameter
    const [product, setProduct] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const [isCartOpen, setIsCartOpen] = useState(false);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await fetch(`https://fakestoreapi.com/products/${id}`);
                if (!response.ok) {
                    throw new Error("Server error");
                }
                const data = await response.json();
                setProduct(data);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        fetchProduct();
    }, [id]);

    function increment() {
        if (quantity >= 5) {
            setQuantity(quantity + 0);
            alert('No more than 5 items can be chosen');
        } else {
            setQuantity(quantity + 1);
        }
    }

    function decrement() {
        if (quantity >= 0) {
            setQuantity(quantity - quantity);
        } else {
            setQuantity(quantity - 1);
        }
    }

    function addToCart() {
        setCart([...cart, { product, quantity }]);
    }

    function toggleCart() {
        setIsCartOpen(!isCartOpen);
    }

    if (loading) return <p>Loading...</p>;
    if (error) return <p>A network error was encountered</p>;

    return (
        <>
            <Navbar toggleCart={toggleCart} />
            <div className="product-main">
                <div>
                    <div>
                        {product && (
                            <>
                                <img src={product.image} alt={product.title} />
                                <br />
                                <h1>{product.title}</h1>
                                <br />
                                <p>{product.description}</p>
                                <br />
                                <p>Price: ${product.price}</p>
                                <br />
                            </>
                        )}
                    </div>
                    <div>
                        <button onClick={increment}>+</button>
                        {quantity}
                        <button onClick={decrement}>-</button>
                    </div>
                    <br />
                    <button onClick={addToCart}>Add to Cart</button>
                </div>
            </div>
            {isCartOpen && <div className="cart-overlay">
                <Cart cart={cart} />
            </div>}
        </>
    );
}
