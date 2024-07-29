import { ISongData } from "@/types";
import React, { memo } from "react";

import type { FC, PropsWithChildren } from "react";
import { SongMenuItemWrapper } from "./style";
import { formatCount, formatImageSize } from "@/utils";

interface IProps {
  songData: ISongData;
}

const SongsMenuItem: FC<PropsWithChildren<IProps>> = (props) => {
  const { songData } = props;

  return (
    <SongMenuItemWrapper>
      <div className="top">
        <img src={formatImageSize(songData.picUrl, 141)} alt={songData.name} />
        <div className="cover sprite_cover">
          <div className="info sprite_cover">
            <span>
              <i className="sprite_icon headset"></i>
              <span className="count">{formatCount(songData.playCount)}</span>
            </span>
            <i className="sprite_icon play"></i>
          </div>
        </div>
      </div>
      <div className="bottom">{songData.name}</div>
    </SongMenuItemWrapper>
  );
};

export default memo(SongsMenuItem);
