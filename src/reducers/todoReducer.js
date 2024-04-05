// baslangic degeri
export const initialState = {
  todos: [],
  isDarkMode: true,
};

//reducer fonsiyonu

const reducer = (state, action) => {
  //aksiyonun tipipne gore return edilmesi gereken veriye karar veriyoruz.
  switch (action.type) {
    case "CHANGE_THEME":
      //state deki butun degerleri koru, isDarkMode mevcut degerinin tersi olsun
      return { ...state, isDarkMode: !state.isDarkMode };

    case "CREATE":
      return { ...state, todos: state.todos.concat(action.payload) };

    case "CLEAR":
      return { ...state, todos: [] };

    case "DELETE":
      // aksiyonun payload'i ile gonderilen id disarisindakileri al
      const filtered = state.todos.filter((i) => i.id !== action.payload);
      //state'i guncelle
      return { ...state, todos: filtered };

    default:
      return state;
  }
};

export default reducer;
