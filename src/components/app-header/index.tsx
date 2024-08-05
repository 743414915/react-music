import { Input } from "antd";
import { NavLink } from "react-router-dom";
import React, { memo } from "react";
import type { FC, PropsWithChildren } from "react";
import { SearchOutlined } from "@ant-design/icons";

import { HeaderLeft, HeaderRight, HeaderWrapper } from "./style";

import headerTitle from "@/assets/data/header-title.json";

interface IProps {}

const AppHeader: FC<PropsWithChildren<IProps>> = () => {
  /**
   * @description 组件的展示逻辑
   */
  function showItem(item: any) {
    if (item.type === "path") {
      return (
        <NavLink to={item.link}>
          {item.title}
          <i className="icon sprite_01"></i>
        </NavLink>
      );
    }
    return (
      <a href={item.link} target={"_blank"}>
        {item.title}
      </a>
    );
  }

  return (
    <HeaderWrapper>
      <div className="content wrap-v1">
        <HeaderLeft>
          <a className={"logo sprite_01"} href="/">
            网易云音乐
          </a>
          <div className={"title-list"}>
            {headerTitle.map((item) => {
              return (
                <div className={"item"} key={item.title}>
                  {showItem(item)}
                </div>
              );
            })}
          </div>
        </HeaderLeft>
        <HeaderRight>
          <span className="input">
            <Input
              className="search"
              placeholder="音乐/视频/电台/用户"
              prefix={<SearchOutlined />}
            />
          </span>
          <span className="center">创作者中心</span>
          <span className="login">登录</span>
        </HeaderRight>
      </div>
      <div className="divider"></div>
    </HeaderWrapper>
  );
};

export default memo(AppHeader);
