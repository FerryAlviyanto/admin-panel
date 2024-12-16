import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { AppDispatcch, RootState } from "./store";

export const useAppDispatch = () => useDispatch<AppDispatcch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
