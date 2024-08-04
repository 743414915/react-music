import React, { memo, useEffect } from "react";
import type { FC, PropsWithChildren } from "react";

import { useAppDispatch } from "@/store";
import {
  fetchRankingDataAcyion,
  fetchRecommendDataAction,
} from "./store/recommend";
import { RecommendWrapper } from "./style";
import TopBanner from "./c-cpns/top-banner";
import HotRecommend from "./c-cpns/hot-recommend";
import NewAlbum from "./c-cpns/new-album";
import TopRanking from "./c-cpns/top-ranking";
import UserLogin from "./c-cpns/user-login";
import SettleSinger from "./c-cpns/settle-singer";
import HotAnchor from "./c-cpns/hot-anchor";

interface IProps {}

const Recommend: FC<PropsWithChildren<IProps>> = () => {
  // 发起action获取数据
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchRecommendDataAction());
    dispatch(fetchRankingDataAcyion());
  });

  return (
    <div>
      <RecommendWrapper className="wrap-v2">
        <TopBanner />
        <div className="content wrap-v2">
          <div className="left">
            <HotRecommend />
            <NewAlbum />
            <TopRanking />
          </div>
          <div className="right">
            <UserLogin />
            <SettleSinger />
            <HotAnchor />
          </div>
        </div>
      </RecommendWrapper>
    </div>
  );
};

export default memo(Recommend);
