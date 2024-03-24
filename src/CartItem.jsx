import { Button } from "antd";
import { AiOutlineMinus } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { removeFromCart } from "./redux/Slice/cartSlice";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(removeFromCart(item.id));
  };

  return (
    <div>
      <p>{item.name}</p>
      <p>Price: ${item.price}</p>
      <p>Quantity: {item.quantity}</p>
      <Button type="primary" icon={<AiOutlineMinus />} onClick={handleRemove}>
        Remove
      </Button>
    </div>
  );
};

export default CartItem;
