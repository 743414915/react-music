import {
  useSelector,
  TypedUseSelectorHook,
  useDispatch,
  shallowEqual,
} from "react-redux";

import { configureStore } from "@reduxjs/toolkit";
import counter from "./modules/counter";
import recommendReducer from "@/views/discover/c-views/recommend/store/recommend";
import palyerReducer from "@/views/player/store/player";

const store = configureStore({
  reducer: {
    counter,
    recommend: recommendReducer,
    player: palyerReducer,
  },
});

export type IRootState = ReturnType<typeof store.getState>;

export const useAppSelector: TypedUseSelectorHook<IRootState> = useSelector;
export const useAppDispatch: () => typeof store.dispatch = useDispatch;
export const appShallowEqual = shallowEqual;

export default store;
