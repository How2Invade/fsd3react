import { useSelector, useDispatch } from "react-redux";
import { addItem, removeItem, decreaseQuantity, clearCart } from "../redux/cartSlice";
import { useNavigate } from "react-router-dom";

function Cart() {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const total = cartItems.reduce((sum, item) => sum + item.price * (item.quantity || 1), 0);
  const totalItems = cartItems.reduce((sum, item) => sum + (item.quantity || 1), 0);

  return (
    <main className="page page--cart">
      <section className="cart-section">
        <h2 className="section-title">Your Cart ({totalItems})</h2>

        {cartItems.length === 0 ? (
          <p className="cart-empty">Cart is empty</p>
        ) : (
          <>
            <div className="cart-list">
              {cartItems.map((item) => (
                <article key={item.id} className="cart-item">
                  <div>
                    <p className="cart-item__name">{item.name}</p>
                    <p className="cart-item__price">
                      ₹{item.price} each
                    </p>
                  </div>

                  <div className="qty-control">
                    <button
                      className="button button--small button--ghost"
                      onClick={() => dispatch(decreaseQuantity(item.id))}
                    >
                      -
                    </button>
                    <span className="qty-count">{item.quantity || 1}</span>
                    <button
                      className="button button--small button--ghost"
                      onClick={() => dispatch(addItem(item))}
                    >
                      +
                    </button>
                  </div>

                  <button
                    className="button button--ghost"
                    onClick={() => dispatch(removeItem(item.id))}
                  >
                    Remove
                  </button>
                </article>
              ))}
            </div>

            <div className="cart-footer">
              <h3 className="cart-total">Total: ₹{total}</h3>

              <button
                className="button button--primary"
                onClick={() => {
                  dispatch(clearCart());
                  navigate("/success");
                }}
              >
                Checkout
              </button>
            </div>
          </>
        )}
      </section>
    </main>
  );
}

export default Cart;
