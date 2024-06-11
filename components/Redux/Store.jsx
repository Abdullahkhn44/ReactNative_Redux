import { configureStore } from "@reduxjs/toolkit";
import Reducer from "./Reducer";

const Store=configureStore({
    reducer:Reducer
})

export default Store