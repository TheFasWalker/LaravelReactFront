import {  useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../entities/store/store";
import type { TypedUseSelectorHook } from 'react-redux';

export const useAppDispatch = () =>useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector