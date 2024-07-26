import React, { memo } from "react";

import type { FC, PropsWithChildren } from "react";

interface IProps {}

const Download: FC<PropsWithChildren<IProps>> = () => {
  return <div>Download</div>;
};

export default memo(Download);
