import React, { memo } from "react";

import type { FC, PropsWithChildren } from "react";
import { RankingItemWrapper } from "./style";
import { IPlaylist } from "@/types";
import { formatImageSize } from "@/utils";

interface IProps {
  itemData: IPlaylist;
}

const TopRankingItem: FC<PropsWithChildren<IProps>> = (props) => {
  const { itemData } = props;
  const { tracks = [] } = itemData;

  return (
    <RankingItemWrapper>
      <div className="header">
        <div className="image">
          <img src={formatImageSize(itemData.coverImgUrl, 80)} alt="" />
          <a href="" className="sprite_cover"></a>
        </div>
        <div className="info">
          <div className="name">{itemData.name}</div>
          <div>
            <div className="sprite_02 btn play"></div>
            <div className="sprite_02 btn favor"></div>
          </div>
        </div>
      </div>
      <div className="list">
        {tracks.slice(0, 10).map((item, index) => {
          return (
            <div className="item" key={item.id}>
              <div className="index">{index + 1}</div>
              <div className="info">
                <div className="name">{item.name}</div>
                <div className="operator">
                  <button className="btn sprite_02 play"></button>
                  <button className="btn sprite_icon2 add"></button>
                  <button className="btn sprite_02 favor"></button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="footer">查看全部&gt;</div>
    </RankingItemWrapper>
  );
};

export default memo(TopRankingItem);
