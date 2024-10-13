function quadRants(x, y) {
  if (x > 0 && y > 0) return 1;
  else if (x < 0 && y > 0) {
    return 2;
  } else if (x < 0 && y < 0) {
    return 3;
  } else if (x > 0 && y < 0) {
    return 4;
  }
}
console.log(quadRants(3, 5));
console.log(quadRants(-10, 100));
console.log(quadRants(-1, -9));
console.log(quadRants(19, -56));
