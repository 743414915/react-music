import React, { Suspense, useEffect } from "react";
import { useRoutes } from "react-router-dom";

import routes from "@/router";
import AppHeader from "@/components/app-header";
import AppFooter from "@/components/app-footer";
import { Button } from "antd";
import AppPlayerBar from "./views/player/app-player-bar";
import { useAppDispatch } from "./store";
import { fetchCurrentSongAction } from "./views/player/store/player";

function App() {
  // 获取某一首歌曲
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchCurrentSongAction(2611596618));
  });

  return (
    <div className="App">
      <AppHeader />
      <Suspense fallback={<div>loading...</div>}>
        <div className="main">{useRoutes(routes)}</div>
      </Suspense>
      <AppFooter />

      {/* 播放器工具栏 */}
      <AppPlayerBar />
    </div>
  );
}

export default App;
