import React, { memo } from "react";

import type { FC, PropsWithChildren } from "react";

interface IProps {}

const Album: FC<PropsWithChildren<IProps>> = () => {
  return <div>Album</div>;
};

export default memo(Album);
