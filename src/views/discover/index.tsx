import React, { memo, Suspense } from "react";
import type { FC, PropsWithChildren } from "react";

import { Outlet, Link } from "react-router-dom";
import NavBar from "./c-cpns/nav-bar";

interface IProps {}

const Discover: FC<PropsWithChildren<IProps>> = () => {
  return (
    <div>
      <NavBar />
      <Suspense fallback={<div>loading...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default memo(Discover);
