import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getCurrentSongList } from "../service/idnex";
import { IRootState } from "@/store";

interface IAsyncThunkState {
  state: IRootState;
}
// 请求歌曲
export const currentSongAction = createAsyncThunk<
  void,
  number,
  IAsyncThunkState
>("currentSong", async (id, { dispatch, getState }) => {
  // 准备播放某一首歌曲时, 分成两种情况
  // 1.从列表尝试是否可以获取到这首歌
  const playSongList = getState().player.playSongList;
  const findIndex = playSongList.findIndex((item: any) => item.id === id);
  if (findIndex === -1) {
    console.log(111);
    // 没有找到相同的
    const res = await getCurrentSongList(id);
    const song = res.songs[0];

    // 把歌曲放到列表中
    const newPlaySongList = [...playSongList];
    newPlaySongList.push(song);
    // dispatch(changeCurrentSongAction(song))
    dispatch(changePlaySongList(newPlaySongList));
    // dispatch(changePlaySongIndex(newPlaySongList.length - 1))
  } else {
    console.log(222);
    // const song = playSongList[findIndex]
    // dispatch(changeCurrentSongAction(song))
    // dispatch(changePlaySongIndex(findIndex))
  }
});

interface IPlayerState {
  currentSong: any;
  playSongList: any[];
}

const initialState: IPlayerState = {
  currentSong: {
    name: "温柔",
    id: 2611596618,
    pst: 0,
    t: 0,
    ar: [{ id: 13193, name: "五月天", tns: [], alias: [] }],
    alia: [],
    pop: 100,
    st: 0,
    rt: "600902000000534560",
    fee: 1,
    v: 80,
    crbt: null,
    cf: "",
    al: {
      id: 38285,
      name: "我们是五月天",
      picUrl:
        "https://p2.music.126.net/XlMYABTsvXGxOn0h9F61VQ==/109951168750902183.jpg",
      tns: [],
      pic_str: "109951168750902183",
      pic: 109951168750902180,
    },
    dt: 269800,
    h: { br: 320000, fid: 0, size: 10794885, vd: -63966, sr: 44100 },
    m: { br: 192000, fid: 0, size: 6476948, vd: -61383, sr: 44100 },
    l: { br: 128000, fid: 0, size: 4317980, vd: -59695, sr: 44100 },
    sq: { br: 1053726, fid: 0, size: 35536923, vd: -64088, sr: 44100 },
    hr: null,
    a: null,
    cd: "1",
    no: 2,
    rtUrl: null,
    ftype: 0,
    rtUrls: [],
    djId: 0,
    copyright: 0,
    s_id: 0,
    mark: 17179877888,
    originCoverType: 1,
    originSongSimpleData: null,
    tagPicList: null,
    resourceState: true,
    version: 80,
    songJumpInfo: null,
    entertainmentTags: null,
    awardTags: null,
    single: 0,
    noCopyrightRcmd: null,
    mv: 10929721,
    rtype: 0,
    rurl: null,
    mst: 9,
    cp: 684010,
    publishTime: 1049126400000,
  },
  playSongList: [
    {
      name: "起风了",
      id: 1330348068,
      pst: 0,
      t: 0,
      ar: [
        {
          id: 12085562,
          name: "买辣椒也用券",
          tns: [],
          alias: [],
        },
      ],
      alia: [],
      pop: 100,
      st: 0,
      rt: "",
      fee: 8,
      v: 42,
      crbt: null,
      cf: "",
      al: {
        id: 74715426,
        name: "起风了",
        picUrl:
          "https://p1.music.126.net/diGAyEmpymX8G7JcnElncQ==/109951163699673355.jpg",
        tns: [],
        pic_str: "109951163699673355",
        pic: 109951163699673360,
      },
      dt: 325868,
      h: {
        br: 320000,
        fid: 0,
        size: 13037236,
        vd: -77525,
        sr: 44100,
      },
      m: {
        br: 192000,
        fid: 0,
        size: 7822359,
        vd: -74987,
        sr: 44100,
      },
      l: {
        br: 128000,
        fid: 0,
        size: 5214920,
        vd: -73504,
        sr: 44100,
      },
      sq: {
        br: 985873,
        fid: 0,
        size: 40158105,
        vd: -77524,
        sr: 44100,
      },
      hr: {
        br: 2832349,
        fid: 0,
        size: 115371553,
        vd: -77475,
        sr: 88200,
      },
      a: null,
      cd: "1",
      no: 1,
      rtUrl: null,
      ftype: 0,
      rtUrls: [],
      djId: 0,
      copyright: 0,
      s_id: 0,
      mark: 536879104,
      originCoverType: 1,
      originSongSimpleData: null,
      tagPicList: null,
      resourceState: true,
      version: 42,
      songJumpInfo: null,
      entertainmentTags: null,
      awardTags: null,
      single: 0,
      noCopyrightRcmd: null,
      mv: 10782615,
      rtype: 0,
      rurl: null,
      mst: 9,
      cp: 1415923,
      publishTime: 0,
    },
    {
      name: " 画 ",
      id: 202369,
      pst: 0,
      t: 0,
      ar: [
        {
          id: 6731,
          name: " 赵雷 ",
          tns: [],
          alias: [],
        },
      ],
      alia: [],
      pop: 100,
      st: 0,
      rt: "600902000007908521",
      fee: 8,
      v: 50,
      crbt: null,
      cf: "",
      al: {
        id: 20339,
        name: " 赵小雷 ",
        picUrl:
          "https://p1.music.126.net/wldFtES1Cjnbqr5bjlqQbg==/18876415625841069.jpg",
        tns: [],
        pic_str: "18876415625841069",
        pic: 18876415625841068,
      },
      dt: 228133,
      h: {
        br: 320000,
        fid: 0,
        size: 9128272,
        vd: -50392,
        sr: 44100,
      },
      m: {
        br: 192002,
        fid: 0,
        size: 5476981,
        vd: -47796,
        sr: 44100,
      },
      l: {
        br: 128002,
        fid: 0,
        size: 3651335,
        vd: -46049,
        sr: 44100,
      },
      sq: {
        br: 847077,
        fid: 0,
        size: 24155825,
        vd: -50481,
        sr: 44100,
      },
      hr: null,
      a: null,
      cd: "1",
      no: 3,
      rtUrl: null,
      ftype: 0,
      rtUrls: [],
      djId: 0,
      copyright: 2,
      s_id: 0,
      mark: 8192,
      originCoverType: 1,
      originSongSimpleData: null,
      tagPicList: null,
      resourceState: true,
      version: 50,
      songJumpInfo: null,
      entertainmentTags: null,
      awardTags: null,
      single: 0,
      noCopyrightRcmd: null,
      mv: 0,
      rtype: 0,
      rurl: null,
      mst: 9,
      cp: 1400821,
      publishTime: 1312646400007,
    },
  ],
};

const playerSlice = createSlice({
  name: "player",
  initialState,
  reducers: {
    changePlaySongList(state, { payload }) {
      state.playSongList = payload;
    },
  },
});

export const { changePlaySongList } = playerSlice.actions;
export default playerSlice.reducer;
