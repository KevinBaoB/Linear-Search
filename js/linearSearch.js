function linear(word) {
  let arrayToSearchThrough = [];
  for (let i = 0; i < word.length; i++) {
    arrayToSearchThrough.push(word[i]);
  }
  return arrayToSearchThrough;
}

bananaPhone = linear("banana");

// console.log(bananaPhone);

// exports.linearSearch = function(valueToFind, arrayToSearchThrough) {

// };

const linearSearch = (item, arrayToSearchThrough) => {
  let arr = [];
  for (i = 0; i < arrayToSearchThrough.length; i++) {
    if (arrayToSearchThrough[i] === item) {
      arr.push(i);
    }
  }
  return arr;
};

console.log(linearSearch("a", bananaPhone));
