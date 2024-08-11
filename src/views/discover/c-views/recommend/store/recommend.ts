import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  getArtistList,
  getBanners,
  getHotRecommend,
  getNewAlbum,
  getPlayListDetail,
} from "../service/recommend";
import { ISettleSingers, INewAlbum, IPlaylist, ISongData } from "@/types";

export const fetchRecommendDataAction = createAsyncThunk(
  "fetchdata",
  async (_, { dispatch }) => {
    getBanners().then((res) => {
      dispatch(changeBannersAction(res.banners));
    });
    getHotRecommend(8).then((res) => {
      dispatch(changeHotRecommendAction(res.result));
    });
    getNewAlbum().then((res) => {
      dispatch(changeNewAlbumAction(res.albums));
    });
    getArtistList(5).then((res) => {
      dispatch(changeArtistListAction(res.artists));
    });
  },
);

const rankingIds = [19723756, 3779629, 2884035];
export const fetchRankingDataAcyion = createAsyncThunk(
  "rankingData",
  (_, { dispatch }) => {
    const promises: Promise<any>[] = [];
    rankingIds.forEach((id) => {
      promises.push(getPlayListDetail(id));
    });

    Promise.all(promises).then((res) => {
      const playlists = res
        .filter((item) => item.playlist)
        .map((item) => item.playlist);
      dispatch(changeRankingAction(playlists));
    });
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
  rankings: IPlaylist[];
  settleSingers: ISettleSingers[];
}

const initialState: IRecommendState = {
  banners: [],
  hotRecommends: [],
  newAlbums: [],
  rankings: [],
  settleSingers: [],
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
    changeRankingAction(state, { payload }) {
      state.rankings = payload;
    },
    changeArtistListAction(state, { payload }) {
      state.settleSingers = payload;
    },
  },
});

export const {
  changeBannersAction,
  changeHotRecommendAction,
  changeNewAlbumAction,
  changeRankingAction,
  changeArtistListAction,
} = recommendSlice.actions;
export default recommendSlice.reducer;
