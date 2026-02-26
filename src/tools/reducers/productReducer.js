import { product as staticProducts } from "../../information/static";


const customProducts = JSON.parse(localStorage.getItem("customProducts")) || [];

const initialState = [...staticProducts, ...customProducts];

export const productReducer = (state = initialState, action) => {

  switch (action.type) {

    case "CREATE_PRODUCT":

      const newCustomProducts = [...JSON.parse(localStorage.getItem("customProducts") || "[]"), action.product];
      localStorage.setItem("customProducts", JSON.stringify(newCustomProducts));

      return [...state, action.product];


    case "EDIT_PRODUCT":
      return state.map(item=>{
        if(item.id == action.id){
          return {...item,...action.update}
        }else{
          return item
        }
      })



    case "DELETE_PRODUCT":

      const deletedCustomProducts = JSON.parse(localStorage.getItem("customProducts") || "[]").filter(p => p.id !== action.id)

      localStorage.setItem("customProducts", JSON.stringify(deletedCustomProducts));

      return state.filter(p => p.id !== action.id);



    default:

      return state;

  }

}