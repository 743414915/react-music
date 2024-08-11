export interface ILyric {
  time: number;
  lyric: string;
}

export function parseLyric(lyricStr: string) {
  // 匹配时间的正则
  const timeRegExp = /\[(\d{2}):(\d{2})\.(\d{2,3})\]/;

  const lyrics: ILyric[] = [];

  // 1.拿到一行行的歌
  const lines = lyricStr.split("\n");

  // 2.遍历每一行歌词，解析
  for (const line of lines) {
    const res = timeRegExp.exec(line);
    if (!res) {
      continue;
    }

    const time1 = Number(res[1]) * 60 * 1000;
    const time2 = Number(res[2]) * 1000;
    const time3 = res[3].length == 2 ? Number(res[3]) * 10 : Number(res[3]);

    const _time = time1 + time2 + time3;

    lyrics.push({ time: _time, lyric: line.replace(timeRegExp, "") });
  }

  return lyrics;
}
