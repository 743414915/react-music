export function formatCount(count: number) {
  if (count > 100000) {
    return count / 10000 + "万";
  } else {
    return count;
  }
}

export function formatImageSize(
  imageUrl: string,
  width: number,
  height: number = width,
) {
  return imageUrl + `?param=${width}y${height}`;
}

export function formatTime(time: number) {
  // 毫秒 => 秒

  const timeSeconds = time / 1000;

  // 1.分钟
  const minute = Math.floor(timeSeconds / 60);

  // 2.秒钟
  const second = Math.floor(timeSeconds % 60);

  const formatMinute = String(minute).padStart(2, "0");
  const formatSeconds = String(second).padStart(2, "0");

  return `${formatMinute}:${formatSeconds}`;
}
