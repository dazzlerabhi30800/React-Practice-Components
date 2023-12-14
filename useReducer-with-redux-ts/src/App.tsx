import "./App.css";
import { useStateReducer } from "./Context";

function App() {
  const { count, dispatch } = useStateReducer();
  return (
    <>
      <button onClick={() => dispatch({ type: "SUB" })}>-</button>
      <h1>{count}</h1>
      <button onClick={() => dispatch({ type: "ADD" })}>+</button>
    </>
  );
}

export default App;
