const initialState = [];


export const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CREATE_CATEGORY":
      return [...state, action.category];


    case "DELETE_CATEGORY":
      return state.filter(p => p.id !== action.id);


    default:
      return state;
  }
}