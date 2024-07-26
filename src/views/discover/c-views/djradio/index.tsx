import React, { memo } from "react";

import type { FC, PropsWithChildren } from "react";

interface IProps {}

const Djradio: FC<PropsWithChildren<IProps>> = () => {
  return <div>Djradio</div>;
};

export default memo(Djradio);
