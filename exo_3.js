function myReduce(arr, func, initialValue) {
  const accumulator = initialValue;
  for (let i = 0; i < arr.length; i++) {
    func(arr[i], accumulator);
  }
  return accumulator;
}
