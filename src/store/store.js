import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import productReducer from "./productSlice";
import createSagaMiddleware from "@redux-saga/core";
import productSaga from "./productSaga";
//import rootSaga from "./root-sagas";
const sagaMiddleware= createSagaMiddleware();
const store=configureStore({
    reducer:{
        cart:cartReducer,
        product:productReducer
    },
    middleware:[sagaMiddleware]
})
sagaMiddleware.run(productSaga);

export default store