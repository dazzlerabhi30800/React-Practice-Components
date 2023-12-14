import { useEffect, useState, useMemo } from "react";
import "./App.css";
import Slider from "./Slider";

function App() {
  const [products, setProducts] = useState([]);
  const totalPrice = useMemo(
    () => products.reduce((acc, value) => acc + value.price, 0),
    [products]
  );
  console.log(totalPrice);
  useEffect(() => {
    let mount = true;
    // console.log(mount);
    fetch("https://dummyjson.com/products")
      .then((response) => response.json())
      .then((data) => {
        if (mount) {
          setProducts(data.products);
        }
      });

    return () => {
      mount = false;
    };
  }, []);
  // console.log(products);
  return (
    <>
      <h1>Hello World</h1>
      <Slider />
      <p
        style={{
          margin: "5px auto",
          padding: "5px",
          width: "fit-content",
        }}
      >
        Total price of {products.length} is ₹{totalPrice}
      </p>
    </>
  );
}

export default App;
