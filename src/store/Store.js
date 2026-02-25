import { combineReducers, createStore } from "redux"

import { categoryReducer } from "../tools/reducers/CategoryReducer";
import { productReducer } from "../tools/reducers/productReducer";





const Store =()=>{
    const store = createStore(combineReducers({
        product: productReducer,
        category: categoryReducer  
    }))

    return store
}


export default Store;