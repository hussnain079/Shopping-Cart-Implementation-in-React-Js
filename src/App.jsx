import Cart from "./Cart";
import ProductList from "./ProductList";
import "./App.css";

const products = [
  { id: 1, name: "Product 1", price: 10 },
  { id: 2, name: "Product 2", price: 12 },
  { id: 3, name: "Product 3", price: 15 },
];

const App = () => {
  return (
    <div>
      <ProductList products={products} />
      <Cart />
    </div>
  );
};

export default App;
