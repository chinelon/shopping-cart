/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react"
import Navbar from "./ Navbar";
import { Link, Route } from "react-router-dom";
export default function Shop() {

    const [products, setProducts] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const [cart, setCart] = useState([])

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch('https://fakestoreapi.com/products/');
                if (!response.ok) {
                    throw new Error("Server error");
                }
                const data = await response.json();
                setProducts(data);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();

    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>A network error was encountered</p>;

    return (
        <>
            <Navbar />
            <div className="shop-main">
                {products.map(product => (
                    <div key={product.id} id="product">
                        <Link to={`/product/${product.id}`}>

                            <img src={product.image} alt={product.title} />
                            <br />
                            <p>{product.title}</p>
                            <br />
                            <h4>${product.price} </h4>
                        </Link>
                        <button> Add to Cart </button>
                    </div>
                ))}
            </div>
        </>
    )
}
