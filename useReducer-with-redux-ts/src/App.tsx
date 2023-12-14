import { useEffect } from "react";
import "./App.css";
import {
  increment,
  decrement,
  reset,
  useAppDispatch,
  useAppSelector,
  fetchContent,
} from "./Store";
import ResetButton from "./components/Reset";

function App() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchContent());
  }, [dispatch]);
  const count = useAppSelector((state) => state.count);
  const contents = useAppSelector((state) => state.contents)[0];
  console.log(contents);
  return (
    <>
      <button onClick={() => dispatch(decrement())}>-</button>
      <h1>{count}</h1>
      <button onClick={() => dispatch(increment())}>+</button>
      <ResetButton reset={reset} dispatch={dispatch} payload={4} />
      <ResetButton reset={reset} dispatch={dispatch} payload={0} />
    </>
  );
}

export default App;
