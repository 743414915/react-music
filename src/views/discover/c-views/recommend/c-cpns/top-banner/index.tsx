import { Carousel } from "antd";
import React, { memo, useRef, useState } from "react";
import type { FC, ElementRef, PropsWithChildren } from "react";
import classNames from "classnames";

import { BannerLeft, BannerWrapper, BannerRight, BannerControl } from "./style";
import { appShallowEqual, useAppSelector } from "@/store";

interface IProps {}

const TopBanner: FC<PropsWithChildren<IProps>> = () => {
  const [currentIndex, setCruuentIndex] = useState(0);
  /** 定义内部数据 */
  const bannerRef = useRef<ElementRef<typeof Carousel>>(null);

  // 从store中获取数据
  const { banners } = useAppSelector(
    (state) => ({
      banners: state.recommend.banners || [],
    }),
    appShallowEqual,
  );

  /** 轮播图点击了上一个 */
  function handlePrevClick() {
    bannerRef.current?.prev();
  }
  /** 轮播图点击了下一个 */
  function handleNextClick() {
    bannerRef.current?.next();
  }
  /** 轮播图切换前回调 */
  function handleBeforeChange(_: number, to: number) {
    // setCruuentIndex(-1);
    setCruuentIndex(to);
  }

  /** 获取背景图片 */
  let bgImageUrl: string = "";
  if (currentIndex >= 0 && banners.length > 0) {
    bgImageUrl = `${banners?.[currentIndex]?.imageUrl}?imageView&blur=40x20`;
  }

  return (
    <BannerWrapper
      style={{ background: `url("${bgImageUrl}") center center / 6000px` }}
    >
      <div className={"banner wrap-v2"}>
        <BannerLeft>
          <Carousel
            autoplay
            dots={false}
            effect={"fade"}
            ref={bannerRef}
            beforeChange={handleBeforeChange}
          >
            {banners.map((item) => {
              return (
                <div className="banner-item" key={item.imageUrl}>
                  <img
                    className="image"
                    src={item.imageUrl}
                    alt={item.typeTitle}
                  />
                </div>
              );
            })}
          </Carousel>
          <ul className="dots">
            {banners.map((item, index) => {
              return (
                <li key={item.imageUrl}>
                  <span
                    className={classNames("item", {
                      active: index === currentIndex,
                    })}
                  ></span>
                </li>
              );
            })}
          </ul>
        </BannerLeft>
        <BannerRight></BannerRight>
        <BannerControl>
          <button className="btn left" onClick={handlePrevClick}></button>
          <button className="btn right" onClick={handleNextClick}></button>
        </BannerControl>
      </div>
    </BannerWrapper>
  );
};

export default memo(TopBanner);
