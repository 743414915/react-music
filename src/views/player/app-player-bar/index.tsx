import React, { memo, useEffect, useRef, useState } from "react";

import type { FC, PropsWithChildren } from "react";
import {
  AppPlayerBarWrapper,
  ContentWrapper,
  ControlWrapper,
  HandleWrapper,
} from "./style";
import { Link } from "react-router-dom";
import { message, Slider } from "antd";
import { appShallowEqual, useAppDispatch, useAppSelector } from "@/store";
import { formatImageSize, formatTime, getSongPlay } from "@/utils";
import {
  changeLyricIndexAction,
  changeMusicAction,
  changePlayModeAction,
} from "../store/player";

interface IProps {}
const AppPlayerBar: FC<PropsWithChildren<IProps>> = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);

  const { currentSong, lyrics, lyricIndex, playMode } = useAppSelector(
    (state) => ({
      currentSong: state.player.currentSong,
      lyrics: state.player.lyrics,
      lyricIndex: state.player.lyricIndex,
      playMode: state.player.playMode,
    }),
    appShallowEqual,
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    audioRef.current!.src = getSongPlay(currentSong.id);
    audioRef.current
      ?.play()
      .then((res) => {
        setIsPlaying(true);
      })
      .catch((err) => {
        console.log("播放失败", err);
        setIsPlaying(false);
      });

    // 2.获取歌曲总时长
    setDuration(currentSong.dt);
  }, [currentSong]);

  /** 音乐播放进度处理 */
  function handleTimeupdate() {
    // 1.获取当前的播放时间
    const currentTime = audioRef.current!.currentTime * 1000;
    setCurrentTime(currentTime);

    // 2.计算当前歌曲进度
    const progress = (currentTime / duration) * 100;
    setProgress(progress);

    // 3.根据当前的时间匹配对应的歌词
    let index = lyrics.length - 1;
    for (let i = 0; i < lyrics.length; i++) {
      const lyric = lyrics[i];
      if (lyric.time > currentTime) {
        index = i - 1;
        break;
      }
    }

    // 匹配上了对应的歌词索引
    if (index === lyricIndex || index === -1) {
      return;
    }
    dispatch(changeLyricIndexAction(index));
    message.open({ content: lyrics[index].lyric, duration: 0, key: "lyric" });
  }

  /** @description 当前歌曲播放完毕事件 */
  function handleTimeEnded() {
    if (playMode == 2) {
      // 说明当前是单曲循环
      audioRef.current!.currentTime = 0;
      audioRef.current!.play();
    } else {
      handleChangeMusic();
    }
  }

  // 控制播放按钮
  function changePlayClick() {
    // 1.控制播放器的播放/暂停
    !isPlaying
      ? audioRef.current?.play().catch(() => setIsPlaying(false))
      : audioRef.current?.pause();

    // 2.改变isPlaying的状态
    setIsPlaying(!isPlaying);
  }

  /** @description 切换上一首下一首 */
  function handleChangeMusic(isNext = true) {
    dispatch(changeMusicAction(isNext));
    !isPlaying && changePlayClick();
  }

  /** @description 进度条点击 */
  function handleChange(value: number) {
    // 1.设置当前播放时间
    const currentTime = (value / 100) * duration;
    audioRef.current!.currentTime = currentTime / 1000;
    setCurrentTime(currentTime);

    // 2.设置进度
    setProgress(value);
  }

  /** @description 切换播放模式 */
  function handleChangePlayMode() {
    let newPlayMode = playMode + 1;
    if (newPlayMode > 2) {
      newPlayMode = 0;
    }
    dispatch(changePlayModeAction(newPlayMode));
  }

  return (
    <AppPlayerBarWrapper className="sprite_playbar">
      <div className="content wrap-v2">
        <ControlWrapper $isPlay={isPlaying}>
          <div
            className="btn sprite_playbar prev"
            onClick={() => handleChangeMusic(false)}
          ></div>
          <div
            className="btn sprite_playbar play"
            onClick={changePlayClick}
          ></div>
          <div
            className="btn sprite_playbar next"
            onClick={() => handleChangeMusic()}
          ></div>
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
                onChange={handleChange}
              />

              <div className="time">
                <span className="current">{formatTime(currentTime)}</span>
                <span className="divider">/</span>
                <span className="duration">{formatTime(duration)}</span>
              </div>
            </div>
          </div>
        </ContentWrapper>

        <HandleWrapper $playMode={playMode}>
          <div className="left">
            <button className="btn pip"></button>
            <button className="btn sprite_playbar favor"></button>
            <button className="btn sprite_playbar share"></button>
          </div>
          <div className="right sprite_playbar">
            <button className="btn sprite_playbar volume"></button>
            <button
              className="btn sprite_playbar loop"
              onClick={handleChangePlayMode}
            ></button>

            <button className="btn sprite_playbar playlist"></button>
          </div>
        </HandleWrapper>
      </div>
      <audio
        ref={audioRef}
        onEnded={handleTimeEnded}
        onTimeUpdate={handleTimeupdate}
      />
    </AppPlayerBarWrapper>
  );
};

export default memo(AppPlayerBar);
