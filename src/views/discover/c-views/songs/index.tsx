import React, { memo } from "react";

import type { FC, PropsWithChildren } from "react";

interface IProps {}

const Songs: FC<PropsWithChildren<IProps>> = () => {
  return <div>Songs</div>;
};

export default memo(Songs);
