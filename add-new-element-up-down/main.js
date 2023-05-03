function addNewElementUpDown(array, element, position) {
  if (position == 'up') {
    array.unshift(element);
    return array;
  } else if (position == 'down') {
    array.push(element);
    return array;
  } else{
    return "Program Error";
  }
  
}

// console.log(addNewElementUpDown([1, 2, 3, 4, 5], 6, 'down'));
