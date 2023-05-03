function addMoreData(object, key, value) {
  let obj = object;
  let newObj = { [key]: value};
  Object.assign(obj, newObj);
  return obj;
}
console.log(addMoreData({ name: 'Edo', age: 20 }, 'address', 'Jakarta'));