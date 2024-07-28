import React, { memo } from "react";
import type { FC, PropsWithChildren } from "react";
import { Link } from "react-router-dom";

import { HeaderWrapper } from "./style";

interface IProps {}

const AppHeader: FC<PropsWithChildren<IProps>> = () => {
  return (
    <HeaderWrapper>
      <div className="content wrap-v1">
        <Link to={"/discover"}>发现音乐</Link>
        <Link to={"/mine"}>我的音乐</Link>
        <Link to={"/download"}>下载客户端</Link>
        <Link to={"/focus"}>关注</Link>
      </div>
    </HeaderWrapper>
  );
};

export default memo(AppHeader);
