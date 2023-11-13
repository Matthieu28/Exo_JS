function myFilter(arr, func) {
  const filteredArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (func(arr[i])) {
      filteredArr.push(arr[i]);
    }
  }
  return filteredArr;
}
