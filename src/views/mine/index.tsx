import React, { memo } from "react";

import type { FC, PropsWithChildren } from "react";

interface IProps {}

const Mine: FC<PropsWithChildren<IProps>> = () => {
  return <div>Mine</div>;
};

export default memo(Mine);
