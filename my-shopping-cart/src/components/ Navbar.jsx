/* eslint-disable react/prop-types */
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from "react-router-dom"
export default function Navbar({ count }) {
    return (
        <div className="nav">
            <div>
                <h2>Project Selfcare!</h2>
            </div>
            <div className="nav2
            ">
            <div> <Link id="cart-link" to="/cart"> Cart{count} </Link></div>
            <div> <Link id="cart-link" to="/"> Home </Link> </div>
            </div>
          
        </div>
    )
}