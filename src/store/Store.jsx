const storeReducer = (state, action) => {
  switch (action.type) {
    case "ADDTOCARD":
      return [...state, { ...action.payload, qty: 1 }];
    case "REMOVEFROMCARD":
      return state.filter((item) => item.id !== action.payload.id);
    case "ADDPRODTQUANTITY":
      return state.map((item) => {
        if (action.payload.id === item.id)
          return { ...item, qty: action.payload.qty };
        else return item;
      });
    case "EMPTYCARD":
      return [];

    default:
      return state;
  }
};

export default storeReducer;
