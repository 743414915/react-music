import React, { memo } from "react";

import type { FC, PropsWithChildren } from "react";
import { HotAnchorWrapper } from "./style";
import AreaHeaderV2 from "@/components/area-header-v2";
import { hotRadios } from "@/assets/data/local_data";

interface IProps {}

const HoyAnchor: FC<PropsWithChildren<IProps>> = () => {
  return (
    <HotAnchorWrapper>
      <AreaHeaderV2 title="热门主播" />
      <div className="anchors">
        {hotRadios.map((item) => {
          return (
            <div className="item" key={item.name}>
              <a href="#/" className="image">
                <img src={item.picUrl} alt="" />
              </a>
              <div className="info">
                <div className="name">{item.name}</div>
                <div className="desc">{item.position}</div>
              </div>
            </div>
          );
        })}
      </div>
    </HotAnchorWrapper>
  );
};

export default memo(HoyAnchor);
