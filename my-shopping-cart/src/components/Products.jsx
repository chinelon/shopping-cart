import Navbar from "./ Navbar";
import { useEffect, useState } from "react";
import {useParams} from "react-router-dom"
//import { Link } from "react-router-dom";

/*const useImageURL = () => {
    const [imageURL, setImageURL] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/photos", { mode: "cors" })
            .then((response) => {
                if (response.status >= 400) {
                    throw new Error("server error");
                }
                return response.json();
            })
            .then((response) => setImageURL(response[0].url))
            .catch((error) => setError(error))
            .finally(() => setLoading(false));
    }, []);

    return { imageURL, error, loading };
};*/

export default function Products() {


    const [quantity, setQuantity] = useState(0)
    // const { imageURL, error, loading } = useImageURL();
    const [cart, setCart] = useState(0)
    const { id } = useParams(); // Extracting the product ID from the URL parameter
    const [product, setProduct] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);


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
        setQuantity(quantity + 1)
    }

    function decrement() {
        setQuantity(quantity - 1)
    }
    function addToCart() {
        console.log(quantity)
        //this function should also take in the products name, price and picture and push it to the cart components
        setCart(quantity)
        console.log(cart)
    }

    if (loading) return <p>Loading...</p>;
    if (error) return <p>A network error was encountered</p>;
    return (
        <>
            <Navbar />
            <div className="product-main">
                <div>
                    <div>
                        {product && (
                            <>
                                <img src={product.image} alt={product.title} />
                                <h1>{product.title}</h1>
                                <p>{product.description}</p>
                                <p>Price: ${product.price}</p>
                            </>
                        )}
                    </div>
                    <div><button onClick={increment}>+</button>{quantity}<button onClick={decrement}>-</button></div>
                    <button onClick={addToCart}> Add to Cart</button>
                </div>

            </div>
        </>
    )
}