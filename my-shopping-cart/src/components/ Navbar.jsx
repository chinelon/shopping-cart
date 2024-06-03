import { Link } from "react-router-dom";

export default function Navbar({ toggleCart }) {
    return (
        <div className="nav">
            <div>
                <div><Link id="cart-link" to="/"> <h2>Shopfree</h2> </Link></div>
            </div>
            <div className="nav2">
                <div><a id="cart-link" onClick={toggleCart}>Cart</a></div>
                <div><Link id="cart-link" to="/shop">Products</Link></div>
            </div>
            
        </div>
    );
}
