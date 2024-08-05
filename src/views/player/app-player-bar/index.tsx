import React, { memo, useEffect, useRef, useState } from "react";

import type { FC, PropsWithChildren } from "react";
import {
  AppPlayerBarWrapper,
  ContentWrapper,
  ControlWrapper,
  HandleWrapper,
} from "./style";
import { Link } from "react-router-dom";
import { Slider } from "antd";
import { appShallowEqual, useAppSelector } from "@/store";
import { formatImageSize, getSongPlay } from "@/utils";

interface IProps {}
const AppPlayerBar: FC<PropsWithChildren<IProps>> = () => {
  const [isPlaying, setisPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);

  const { currentSong } = useAppSelector(
    (state) => ({
      currentSong: state.player.currentSong,
    }),
    appShallowEqual,
  );

  useEffect(() => {
    // audioRef.current!.src = getSongPlay(currentSong.id);
    // audioRef.current
    //   ?.play()
    //   .then((res) => {
    //     // setIsPlay(true);
    //   })
    //   .catch((err) => {
    //     console.log("播放失败", err);
    //     // setIsPlay(false);
    //   });

    // 2.获取歌曲总时长
    setDuration(currentSong.dt);
  }, [currentSong]);

  /** 音乐播放进度处理 */
  function handleTimeupdate() {
    // 1.获取当前的播放时间
    const currentTime = audioRef.current!.currentTime;

    // 2.计算当前歌曲进度
    const progress = ((currentTime * 1000) / duration) * 100;
    setProgress(progress);
  }

  // 控制播放按钮
  function changePlayClick() {
    // 1.控制播放器的播放/暂停
    !isPlaying
      ? audioRef.current?.play().catch(() => setisPlaying(false))
      : audioRef.current?.pause();

    // 2.改变isPlaying的状态
    setisPlaying(!isPlaying);
  }

  return (
    <AppPlayerBarWrapper className="sprite_playbar">
      <div className="content wrap-v2">
        <ControlWrapper $isPlay={isPlaying}>
          <div className="btn sprite_playbar prev"></div>
          <div
            className="btn sprite_playbar play"
            onClick={changePlayClick}
          ></div>
          <div className="btn sprite_playbar next"></div>
        </ControlWrapper>

        <ContentWrapper>
          <Link to={"/player"}>
            <img
              src={formatImageSize(currentSong?.al?.picUrl, 50)}
              alt=""
              className="image"
            />
          </Link>
          <div className="info">
            <div className="song">
              <span className="song-name">{currentSong.name}</span>
              <span className="singer-name">{currentSong?.ar?.[0]?.name}</span>
            </div>
            <div className="progress">
              <Slider
                value={progress}
                step={0.5}
                tooltip={{ formatter: null }}
              />

              <div className="time">
                <span className="current">00:00</span>
                <span className="divider">/</span>
                <span className="duration">04:35</span>
              </div>
            </div>
          </div>
        </ContentWrapper>

        <HandleWrapper $playMode={1}>
          <div className="left">
            <button className="btn pip"></button>
            <button className="btn sprite_playbar favor"></button>
            <button className="btn sprite_playbar share"></button>
          </div>
          <div className="right sprite_playbar">
            <button className="btn sprite_playbar volume"></button>
            <button className="btn sprite_playbar loop"></button>

            <button className="btn sprite_playbar playlist"></button>
          </div>
        </HandleWrapper>
      </div>
      <audio ref={audioRef} onTimeUpdate={handleTimeupdate} />
    </AppPlayerBarWrapper>
  );
};

export default memo(AppPlayerBar);
