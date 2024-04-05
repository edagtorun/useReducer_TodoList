import { useReducer } from "react";
import counterReducer from "../reducers/counterReducer";

const initialState = {
  count: 0,
};

const Counter = () => {
  const [state, dispatch] = useReducer(counterReducer, initialState);

  return (
    <div className="d-flex gap-4 align-items-center">
      <button onClick={() => dispatch("PRESET")} className="btn btn-secondary">
        Sifirla
      </button>
      <button onClick={() => dispatch("DECREASE")} className="btn btn-primary">
        Azalt
      </button>
      <span className="lead fs-1"> {state.count}</span>
      <button onClick={() => dispatch("INCREASE")} className="btn btn-success">
        Arttir
      </button>
    </div>
  );
};

export default Counter;
