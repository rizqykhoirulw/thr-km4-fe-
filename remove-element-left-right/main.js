function removeLeftRight(arr, position) {
  if (position === 'right') {
    arr.pop();
    return arr;
  } else if (position === 'left') {
    arr.shift();
    return arr;
  }
}

console.log(removeLeftRight([1, 2, 3, 4, 5], 'left'));
