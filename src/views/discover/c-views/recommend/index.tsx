import React, { memo } from "react";

import type { FC, PropsWithChildren } from "react";

interface IProps {}

const Recommend: FC<PropsWithChildren<IProps>> = () => {
  return <div>Recommend</div>;
};

export default memo(Recommend);
