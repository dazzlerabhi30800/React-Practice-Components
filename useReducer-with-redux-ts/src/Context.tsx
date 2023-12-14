import {
  useContext,
  createContext,
  Dispatch,
  ReactNode,
  useReducer,
} from "react";

interface AppState {
  type: string;
}
interface StateContext {
  count: number;
  dispatch: Dispatch<AppState>;
}

const stateContext = createContext<StateContext | null>(null);

export default function ContextProvider({ children }: { children: ReactNode }) {
  const stateReducer = (state: number, action: AppState) => {
    switch (action.type) {
      case "SUB":
        return state - 1 <= 0 ? 0 : state - 1;
      case "ADD":
        return state + 1;
      default:
        return state;
    }
  };
  const [count, dispatch] = useReducer(stateReducer, 0);

  return (
    <stateContext.Provider value={{ count, dispatch }}>
      {children}
    </stateContext.Provider>
  );
}

// consumer
export const useStateReducer = () => {
  const stateConsumer = useContext(stateContext);
  if (!stateConsumer) {
    throw new Error("use state outside of Provider");
  }

  return stateConsumer;
};
