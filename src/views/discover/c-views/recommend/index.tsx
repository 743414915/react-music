import hyRequest from "@/service";
import React, { memo, useEffect } from "react";

import type { FC, PropsWithChildren } from "react";

interface IProps {}

const Recommend: FC<PropsWithChildren<IProps>> = () => {
  // 测试网络请求
  useEffect(() => {
    hyRequest
      .get({
        url: "/banner",
      })
      .then((res) => {
        console.log(res);
      });
  }, []);

  return <div>Recommend</div>;
};

export default memo(Recommend);
