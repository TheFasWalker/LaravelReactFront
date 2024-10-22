import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authReduser from './slices/authSlice'
const rootReduser = combineReducers({
    authReduser
});

export const setupStore =()=>{
    return configureStore({
        reducer:rootReduser
    });
}

export type RootState = ReturnType<typeof rootReduser>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];