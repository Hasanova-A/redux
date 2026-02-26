import { category as staticCategories } from "../../information/static";

const customCategories = JSON.parse(localStorage.getItem("customCategories")) || [];
const initialState = [...staticCategories, ...customCategories];

export const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CREATE_CATEGORY": {
      const newCustomCategories = [...JSON.parse(localStorage.getItem("customCategories") || "[]"), action.category];
      localStorage.setItem("customCategories", JSON.stringify(newCustomCategories));
      return [...state, action.category];
    }


    case "EDIT_CATEGORY":
      return state.map(item=>{
        if(item.id == action.id){
          return {...item,...action.update}
        }else{
          return item
        }
      })

    case "DELETE_CATEGORY": {
      const deletedCustomCategories = JSON.parse(localStorage.getItem("customCategories") || "[]").filter(c => c.id !== action.id);
      localStorage.setItem("customCategories", JSON.stringify(deletedCustomCategories));
      return state.filter(c => c.id !== action.id);
    }

    default:
      return state;
  }
}