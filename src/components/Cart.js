import { useSelector, useDispatch } from "react-redux";
import { removeItem, clearCart } from "../redux/cartSlice";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function Cart() {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  useEffect(() => {
    console.log("Cart updated:", cartItems);
  }, [cartItems]);

  return (
    <div>
      <h2>Your Cart</h2>

      {cartItems.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        <>
          {cartItems.map((item, index) => (
            <div key={index}>
              <p>{item.name} - ₹{item.price}</p>
              <button onClick={() => dispatch(removeItem(index))}>
                Remove
              </button>
            </div>
          ))}

          <h3>Total: ₹{total}</h3>

          <button
            onClick={() => {
              dispatch(clearCart());
              navigate("/success");
            }}
          >
            Checkout
          </button>
        </>
      )}
    </div>
  );
}

export default Cart;