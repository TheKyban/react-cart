import {configureStore} from "@reduxjs/toolkit"
import { CartReducer } from "./reducers"

const Store = configureStore({
    reducer:{ 
        cart:CartReducer
    }
})

export default Store