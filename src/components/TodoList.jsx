import { useReducer } from "react";
import todoReducer, { initialState } from "../reducers/todoReducer";

const TodoList = () => {
  const [state, dispatch] = useReducer(todoReducer, initialState);

  const handleSubmit = (e) => {
    e.preventDefault();

    //inputtaki yaziya erisme
    const text = e.target[0].value;

    // kaydedilecek nesneyi hazirla
    const newTodo = {
      id: new Date().getTime(),
      title: text,
    };

    //veriyi reducer'daki state'e kaydeder
    dispatch({ type: "CREATE", payload: newTodo });

    //formu temizle
    e.target.reset();
  };
  return (
    <div
      className={`
    ${state.isDarkMode ? "bg-dark" : "bg-white text-dark"}
    vh-100 vw-100 p-5`}
    >
      <h1 className="text-center mb-5">TODO REDUCER</h1>
      <div className="d-flex justify-content-end">
        <button
          onClick={() => dispatch({ type: "CHANGE_THEME" })}
          className="btn btn-dark"
        >
          Mod Degistir
        </button>
      </div>
      <form
        onSubmit={handleSubmit}
        className="d-flex gap-3 align-items-center my-5"
      >
        <input type="text" className="form-control shadow" />
        <button className="btn btn-success shadow" type="submit">
          Gonder
        </button>
        <button
          onClick={() => dispatch({ type: "CLEAR" })}
          type="button"
          className="btn btn-secondary shadow"
        >
          Temizle
        </button>
      </form>

      <ul className="list-group">
        {state.todos.map((item) => (
          <li
            key={item.id}
            className="list-group-item d-flex justify-content-between align-items-center shadow"
          >
            <span>{item.title}</span>
            <button
              onClick={() => dispatch({ type: "DELETE", payload: item.id })}
              className="btn btn-danger"
            >
              Sil
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
