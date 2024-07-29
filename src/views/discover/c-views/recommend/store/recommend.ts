import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getBanners, getHotRecommend } from "../service/recommend";
import { ISongData } from "@/types";

export const fetchBannerDataAction = createAsyncThunk(
  "banners",
  async (_, { dispatch }) => {
    const res = await getBanners();
    dispatch(changeBannersAction(res.banners));
  },
);

export const fetchHotRecommendAction = createAsyncThunk(
  "hotRecommend",
  async (_, { dispatch }) => {
    const res = await getHotRecommend(8);
    dispatch(changeHotRecommendAction(res.result));
  },
);

interface IRecommendState {
  banners: {
    imageUrl: string;
    targetId: number;
    adid: any;
    targetType: number;
    titleColor: string;
    typeTitle: string;
    url: string;
    exclusive: boolean;
    monitorImpress: any;
    monitorClick: any;
    monitorType: any;
    monitorImpressList: any;
    monitorClickList: any;
    monitorBlackList: any;
    extMonitor: any;
    extMonitorInfo: any;
    adSource: any;
    adLocation: any;
    adDispatchJson: any;
    encodeId: string;
    program: any;
    event: any;
    video: any;
    song: any;
    scm: string;
    bannerBizType: string;
  }[];
  hotRecommends: ISongData[];
}

const initialState: IRecommendState = {
  banners: [],
  hotRecommends: [],
};

const recommendSlice = createSlice({
  name: "recommend",
  initialState,
  reducers: {
    changeBannersAction(state, { payload }) {
      state.banners = payload;
    },
    changeHotRecommendAction(state, { payload }) {
      state.hotRecommends = payload;
    },
  },
});

export const { changeBannersAction, changeHotRecommendAction } =
  recommendSlice.actions;
export default recommendSlice.reducer;
