import React, { memo } from "react";

import type { FC, PropsWithChildren } from "react";

interface IProps {}

const Artist: FC<PropsWithChildren<IProps>> = () => {
  return <div>Artist</div>;
};

export default memo(Artist);
