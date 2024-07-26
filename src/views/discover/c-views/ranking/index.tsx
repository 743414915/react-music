import React, { memo } from "react";

import type { FC, PropsWithChildren } from "react";

interface IProps {}

const Ranking: FC<PropsWithChildren<IProps>> = () => {
  return <div>Ranking</div>;
};

export default memo(Ranking);
