import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getBanners, getHotRecommend, getNewAlbum } from "../service/recommend";
import { INewAlbum, ISongData } from "@/types";

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

export const fetchNewAlbumAction = createAsyncThunk(
  "newAlbums",
  async (_, { dispatch }) => {
    const res = await getNewAlbum();
    dispatch(changeNewAlbumAction(res.albums));
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
  newAlbums: INewAlbum[];
}

const initialState: IRecommendState = {
  banners: [],
  hotRecommends: [],
  newAlbums: [],
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
    changeNewAlbumAction(state, { payload }) {
      state.newAlbums = payload;
    },
  },
});

export const {
  changeBannersAction,
  changeHotRecommendAction,
  changeNewAlbumAction,
} = recommendSlice.actions;
export default recommendSlice.reducer;
