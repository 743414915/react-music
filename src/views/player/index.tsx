import React, { memo } from "react";

import type { FC, PropsWithChildren } from "react";

interface IProps {}

const Player: FC<PropsWithChildren<IProps>> = () => {
  return <div>Player</div>;
};

export default memo(Player);
