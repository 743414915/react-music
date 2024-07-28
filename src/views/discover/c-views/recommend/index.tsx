import React, { memo, useEffect } from "react";
import type { FC, PropsWithChildren } from "react";

import { useAppDispatch } from "@/store";
import { fetchBannerDataAction } from "./store/recommend";
import TopBanner from "./c-cpns/top-banner";

interface IProps {}

const Recommend: FC<PropsWithChildren<IProps>> = () => {
  // 发起action获取数据
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchBannerDataAction());
  });

  return (
    <div>
      <TopBanner />
    </div>
  );
};

export default memo(Recommend);
