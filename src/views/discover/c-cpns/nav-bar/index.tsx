import React, { memo } from "react";
import type { FC, PropsWithChildren } from "react";
import {  NavLink } from "react-router-dom";

import { NavWrapper } from "./style";
import { discoverMenu } from "@/assets/data/local_data";

interface IProps {}

const NavBar: FC<PropsWithChildren<IProps>> = () => {
  return (
    <NavWrapper className={"wrap-v1"}>
      <div className="nav">
        {discoverMenu.map((item) => {
          return (
            <div className={"item"}>
              <NavLink to={item.link}>{item.title}</NavLink>
            </div>
          );
        })}
      </div>
    </NavWrapper>
  );
};

export default memo(NavBar);
