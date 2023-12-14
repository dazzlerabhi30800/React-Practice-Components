import { useRef, useState, createContext, useContext, useMemo } from "react";
import "./App.css";
const UserContext = createContext({
  user: "",
  setUser: () => {},
});

function App() {
  const [user, setUser] = useState("Abhishek");
  const value = useMemo(() => ({ user, setUser }), [user]);
  return (
    <UserContext.Provider value={value}>
      {useMemo(
        () => (
          <>
            <h1>Hello World</h1>
            <Component1 user={user} />
          </>
        ),
        []
      )}
    </UserContext.Provider>
  );
}

function Component1() {
  const { user } = useContext(UserContext);
  return (
    <>
      <h2>Component 1</h2>
      <p>Hello {user}</p>
      <Layout />
    </>
  );
}

function Layout() {
  return (
    <main>
      <UserNameInput />
    </main>
  );
}

function UserNameInput() {
  const { setUser } = useContext(UserContext);
  const inputRef = useRef();
  return (
    <>
      <input type="text" ref={inputRef} />
      <button onClick={() => setUser(inputRef.current.value)}>
        Change User Name
      </button>
    </>
  );
}
export default App;
