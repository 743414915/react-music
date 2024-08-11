import React, { memo } from "react";

import type { FC, PropsWithChildren } from "react";
import { HotRecommendWrapper } from "./style";
import AreaHeaderV1 from "@/components/area-header-v1";
import { useAppSelector, appShallowEqual } from "@/store";
import SongsMenuItem from "@/components/songs-menu-item";

interface IProps {}

const HotRecommend: FC<PropsWithChildren<IProps>> = () => {
  const { HotRecommend } = useAppSelector(
    (state) => ({
      HotRecommend: state.recommend.hotRecommends,
    }),
    appShallowEqual,
  );

  return (
    <HotRecommendWrapper>
      <AreaHeaderV1
        title="热门推荐"
        keywords={["华语", "流行", "摇滚", "民谣", "电子"]}
        moreLink="/discover/songs"
      />

      <div className="recommend-list">
        {HotRecommend?.map((item) => {
          return <SongsMenuItem key={item.id} songData={item} />;
        })}
      </div>
    </HotRecommendWrapper>
  );
};

export default memo(HotRecommend);
