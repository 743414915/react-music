import React, { Suspense } from "react";
import { useRoutes } from "react-router-dom";

import routes from "@/router";
import AppHeader from "@/components/app-header";
import AppFooter from "@/components/app-footer";
import { Button } from "antd";
import AppPlayerBar from "./views/player/app-player-bar";

function App() {
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
