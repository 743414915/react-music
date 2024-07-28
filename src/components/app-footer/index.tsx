import React, { memo } from "react";

import type { FC, PropsWithChildren } from "react";

interface IProps {}

const AppFooter: FC<PropsWithChildren<IProps>> = () => {
  return <h2>AppFooter</h2>;
};

export default memo(AppFooter);
