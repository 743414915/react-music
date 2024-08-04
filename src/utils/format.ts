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
