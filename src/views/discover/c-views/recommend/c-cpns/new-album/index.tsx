import React, { memo, useRef } from "react";

import type { ElementRef, FC, PropsWithChildren } from "react";
import { NewAlbumWrapper } from "./style";
import AreaHeaderV1 from "@/components/area-header-v1";
import { Carousel } from "antd";
import { useAppSelector } from "@/store";
import NewAlbumItem from "@/components/new-album-item";

interface IProps {}

const NewAlbum: FC<PropsWithChildren<IProps>> = () => {
  /** 定义内部的数据 */
  const bannerRef = useRef<ElementRef<typeof Carousel>>(null);

  /** 从redux中获取数据 */
  const { newAlbums } = useAppSelector((state) => ({
    newAlbums: state.recommend.newAlbums || [],
  }));

  /** 事件处理函数 */
  function handlePrevClick() {
    bannerRef.current?.prev();
  }
  function handleNextClick() {
    bannerRef.current?.next();
  }

  return (
    <NewAlbumWrapper>
      <AreaHeaderV1 title="新碟上架" moreLink="/discover/album" />
      <div className="main">
        <button
          className="sprite_02 arrow arrow-left "
          onClick={handlePrevClick}
        ></button>
        <div className="banner">
          <Carousel ref={bannerRef} dots={false} speed={2000}>
            {[0, 1].map((item) => {
              return (
                <div key={item}>
                  <div className="album-list">
                    {newAlbums.slice(item * 5, (item + 1) * 5).map((album) => {
                      return <NewAlbumItem key={album.id} itemData={album} />;
                    })}
                  </div>
                </div>
              );
            })}
          </Carousel>
        </div>
        <button
          className="sprite_02 arrow arrow-right "
          onClick={handleNextClick}
        ></button>
      </div>
    </NewAlbumWrapper>
  );
};

export default memo(NewAlbum);
