import React, { memo } from "react";
import type { FC, PropsWithChildren } from "react";

import { NewAlbumItemWrapper } from "./style";
import { INewAlbum } from "@/types";
import { formatImageSize } from "@/utils";

interface IProps {
  itemData: INewAlbum;
}

const NewAlbumItem: FC<PropsWithChildren<IProps>> = (props) => {
  const { itemData } = props;

  return (
    <NewAlbumItemWrapper>
      <div className="top">
        <img src={formatImageSize(itemData.picUrl, 100)} alt="" />
        <a href="" className="cover sprite_cover"></a>
      </div>
      <div className="bottom">
        <div className="name">{itemData.name}</div>
        <div className="artist">{itemData.artist.name}</div>
      </div>
    </NewAlbumItemWrapper>
  );
};

export default memo(NewAlbumItem);
