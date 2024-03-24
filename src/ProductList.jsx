import { Button } from "antd";
import { useDispatch } from "react-redux";
import { addToCart } from "./redux/Slice/cartSlice";

const ProductList = ({ products }) => {
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  return (
    <div>
      <h2>Products</h2>
      {products?.map((product) => (
        <div key={product.id}>
          <p>{product.name}</p>
          <p>Price: ${product.price}</p>
          <Button type="primary" onClick={() => handleAddToCart(product)}>
            Add to Cart
          </Button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
