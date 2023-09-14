import { configureStore } from "@reduxjs/toolkit";
import userReducer from './userSlilce'
const appStore = configureStore({
reducer :{
    user: userReducer
}
})

export default appStore;