import {
  useSelector,
  TypedUseSelectorHook,
  useDispatch,
  shallowEqual,
} from "react-redux";

import { configureStore } from "@reduxjs/toolkit";
import counter from "./modules/counter";

const store = configureStore({
  reducer: {
    counter,
  },
});

export type IRootState = ReturnType<typeof store.getState>;

export const useAppSelector: TypedUseSelectorHook<IRootState> = useSelector;
export const useAppDispatch: () => typeof store.dispatch = useDispatch;
export const appShallowEqual = shallowEqual;

export default store;
