import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authReduser from './slices/authSlice';
import tagsReduser from './slices/tagsSlice';
import categoriesReduser from './slices/categorySlice'
const rootReduser = combineReducers({
    authReduser,
    tagsReduser,
    categoriesReduser
});

export const setupStore =()=>{
    return configureStore({
        reducer:rootReduser
    });
}

export type RootState = ReturnType<typeof rootReduser>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];