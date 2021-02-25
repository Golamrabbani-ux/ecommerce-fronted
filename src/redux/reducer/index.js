import { combineReducers } from "redux"
import addressReducer from "./address.reducer";
import authReducer from "./auth.reducer";
import cartReducer from "./cart.reducer";
import { categoryReducer } from "./category.reducer"
import orderReducer from "./order";
import productReducer from "./product.reducer";

const rootReducer = combineReducers({
    category: categoryReducer,
    product: productReducer,
    auth: authReducer,
    cart: cartReducer,
    address: addressReducer,
    order: orderReducer
})

export default rootReducer;