//  reducer: useReducer ile yonetilen state'in nasil degisecegine karar veren fonksiyon.

//aldigi parametreler:
// >> state'in son hali
// >> aldigi  eylem / emir (action)
// reducer fonksiyonu gelen aksiyona gore state'in nasil degisecegine karar verir.
// reducer fonksiyonun return ettigi state'in son hali olur.

const reducer = (state, action) => {
  if (action === "PRESET") {
    return { count: 0 };
  }
  if (action === "INCREASE") {
    return { count: state.count + 1 };
  }
  if (action === "DECREASE") {
    return { count: state.count - 1 };
  }
};
export default reducer;
