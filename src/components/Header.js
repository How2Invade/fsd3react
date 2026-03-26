import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Header() {
  const cartItems = useSelector((state) => state.cart.items);
  const totalItems = cartItems.reduce((sum, item) => sum + (item.quantity || 1), 0);

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <h1 className="site-title">Food Delivery</h1>

        <nav className="site-nav">
          <Link to="/" className="site-nav__link">
            Home
          </Link>
          <Link to="/cart" className="site-nav__link site-nav__link--cart">
            Cart ({totalItems})
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
