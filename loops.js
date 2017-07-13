function maybeTrue() {
  var randNum = Math.random() >= 0.5
  return randNum;
}

function doWhileLoop(arr) {
  do {
    arr.pop();
  } while (arr.length > 0 && maybeTrue());
}
