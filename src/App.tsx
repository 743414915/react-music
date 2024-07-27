import React, { Suspense } from "react";
import { useRoutes, Link } from "react-router-dom";

import routes from "@/router";
import { useAppSelector, useAppDispatch, appShallowEqual } from "@/store";
import { changeCountAction } from "@/store/modules/counter";

function App() {
  const { count } = useAppSelector(
    (state) => ({
      count: state.counter.count,
    }),
    appShallowEqual,
  );

  const dispatch = useAppDispatch();
  function handleChangeCount() {
    dispatch(changeCountAction(1));
  }

  return (
    <div className="App">
      <div className="nav">
        <Link to={"/discover"}>发现音乐</Link>
        <Link to={"/mine"}>我的音乐</Link>
        <Link to={"/download"}>下载客户端</Link>
        <Link to={"/focus"}>关注</Link>
      </div>
      <h2>当前计数{count}</h2>
      <button onClick={handleChangeCount}>修改count</button>
      <Suspense fallback={<div>loading...</div>}>
        <div className="main">{useRoutes(routes)}</div>
      </Suspense>
    </div>
  );
}

export default App;
