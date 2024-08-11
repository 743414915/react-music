import React, { memo } from "react";

import type { FC, PropsWithChildren } from "react";
import { TopRankingWrapper } from "./style";
import AreaHeaderV1 from "@/components/area-header-v1";
import { appShallowEqual, useAppSelector } from "@/store";
import TopRankingItem from "../top-ranking-item";

interface IProps {}

const TopRanking: FC<PropsWithChildren<IProps>> = () => {
  const { rankings } = useAppSelector(
    (state) => ({
      rankings: state.recommend.rankings,
    }),
    appShallowEqual,
  );

  return (
    <TopRankingWrapper>
      <AreaHeaderV1 title="榜单" moreLink="/discover/ranking" />
      <div className="content">
        {rankings.map((item) => {
          return <TopRankingItem key={item.id} itemData={item} />;
        })}
      </div>
    </TopRankingWrapper>
  );
};

export default memo(TopRanking);
