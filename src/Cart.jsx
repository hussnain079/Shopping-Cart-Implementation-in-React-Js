import { useSelector } from "react-redux";
import CartItem from "./CartItem";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);

  return (
    <div>
      <h2>Cart</h2>
      {cartItems.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}
    </div>
  );
};

export default Cart;
