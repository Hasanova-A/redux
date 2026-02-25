const initialState = [];





export const productReducer = (state = initialState, action) => {

  switch (action.type) {

    case "CREATE_PRODUCT":

       const createdState = [...state, action.product];

       localStorage.setItem("products", JSON.stringify(createdState))

       return createdState;





    case "DELETE_PRODUCT":

       const deletedState = state.filter(p => p.id !== action.id);

      localStorage.setItem("products", JSON.stringify(deletedState))

      return deletedState



    default:

      return state;

  }

}