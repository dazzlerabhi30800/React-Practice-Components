import "./App.css";
import {
  increment,
  decrement,
  reset,
  useAppDispatch,
  useAppSelector,
} from "./Store";
import ResetButton from "./components/Reset";

function App() {
  const count = useAppSelector((state) => state.count);
  const dispatch = useAppDispatch();
  return (
    <>
      <button onClick={() => dispatch(decrement())}>-</button>
      <h1>{count}</h1>
      <button onClick={() => dispatch(increment())}>+</button>
      <ResetButton reset={reset} dispatch={dispatch} />
    </>
  );
}

export default App;
