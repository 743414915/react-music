import React, { memo } from "react";

import type { FC, PropsWithChildren } from "react";

interface IProps {}

const Focus: FC<PropsWithChildren<IProps>> = () => {
  return <div>Focus</div>;
};

export default memo(Focus);
