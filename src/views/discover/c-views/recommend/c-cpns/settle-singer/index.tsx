import React, { memo } from "react";

import type { FC, PropsWithChildren } from "react";
import { SettleSingerWrapper } from "./style";
import AreaHeaderV2 from "@/components/area-header-v2";
import { appShallowEqual, useAppSelector } from "@/store";
import { formatImageSize } from "@/utils";

interface IProps {}

const SettleSinger: FC<PropsWithChildren<IProps>> = () => {
  const { settleSingers } = useAppSelector(
    (state) => ({
      settleSingers: state.recommend.settleSingers,
    }),
    appShallowEqual,
  );

  return (
    <SettleSingerWrapper>
      <AreaHeaderV2
        title="入驻歌手"
        moreText="查看全部&gt;"
        moreLink="#/discover/artist"
      />

      <div className="artists">
        {settleSingers.map((item) => {
          return (
            <a href="#/discover/artist" key={item.id} className="item">
              <img src={formatImageSize(item.picUrl, 62)} alt="" />
              <div className="info">
                <div className="name">{item.name}</div>
                <div className="alias">{item.alias.join(" ")}</div>
              </div>
            </a>
          );
        })}
      </div>

      <div className="apply-for">
        <a href="#/">申请成为网易音乐人</a>
      </div>
    </SettleSingerWrapper>
  );
};

export default memo(SettleSinger);
