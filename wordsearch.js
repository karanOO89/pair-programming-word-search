//from yesterday
const transpose = function (matrix) {
  let finalArray = [];
  let holderArray = [];
  let count = 0;

  for (let i = 0; i < matrix[0].length; i++) {
    for (const elm of matrix) {
      holderArray.push(elm[count]);
    }
    finalArray.push(holderArray);
    count += 1;
    holderArray = [];
  }

  return finalArray;
};

const wordSearch = (letters, word) => {
  if (letters.length === 0) {
    return "You didn't enter anything.";
  }
  const transposedLetters = transpose(letters);
  const horizontalJoin = letters.map((element) => element.join(""));
  const verticalJoin = transposedLetters.map((element) => element.join(""));

  for (let row of horizontalJoin) {
    if (row.includes(word)) {
      return true;
    }
  }
  for (let row of verticalJoin) {
    if (row.includes(word)) {
      return true;
    }
  }
  return false;
};

module.exports = wordSearch;
