import "./App.css";
import axios from "axios";

function App() {
  const options = {
    method: "POST",
    // url: "https://dev-test.cimet.io/generate-token",
    // url: "http://localhost:5173/generate-token",
    url: "/generate-token",
    mode: "no-cors",
    headers: {
      "Api-key": "4NKQ3-815C2-8T5Q2-16318-55301",
      // "Content-Type": "application/json",
      "Content-Type": "application/x-www-form-urlencoded",
      // "Access-Control-Allow-Origin": "http://localhost:5173/",
      // "Access-Control-Allow-Origin": "*",
      // "Access-Control-Allow-Methods": "POST",
      // "Access-Control-Allow-Headers": "*",
      // "Access-Control-Allow-Credentials": true,
    },
  };

  function multiply(num) {
    return num * num;
  }
  return (
    <>
      <h1>Hello World</h1>
      <p>I am Learning how to get rid of Cors Error</p>
      <span>{multiply(10)}</span>
    </>
  );
}

export default App;
