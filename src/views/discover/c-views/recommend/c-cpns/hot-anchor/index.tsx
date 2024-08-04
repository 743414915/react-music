import React, { memo } from "react";

import type { FC, PropsWithChildren } from "react";
import { HotAnchorWrapper } from "./style";

interface IProps {}

const HoyAnchor: FC<PropsWithChildren<IProps>> = () => {
  return <HotAnchorWrapper>HoyAnchor</HotAnchorWrapper>;
};

export default memo(HoyAnchor);
