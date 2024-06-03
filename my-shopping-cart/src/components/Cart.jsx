export default function Cart({ cart }) {
    return (
        <>
            <div className="cart-main">
                <h3>Welcome to your cart!</h3>
                <hr />
                <div>
                    {cart.map((item, index) => (
                        <div key={index}>
                            <img src={item.product.image} alt={item.product.title} width="50" />
                            {item.product.title} - ${item.product.price} x {item.quantity}
                        </div>
                    ))}
                </div>
                Total: ${cart.reduce((total, item) => total + item.product.price * item.quantity, 0)}
            </div>
        </>
    );
}
