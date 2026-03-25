import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Header() {
  const cartItems = useSelector((state) => state.cart.items);

  return (
    <div style={{ background: "#ff4d4d", color: "white", padding: "15px" }}>
      <h2>Food Delivery</h2>

      <Link to="/">Home</Link> | 
      <Link to="/cart"> Cart ({cartItems.length})</Link>
    </div>
  );
}

export default Header;