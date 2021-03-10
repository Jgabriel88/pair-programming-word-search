const letters = [
  ['A', 'W', 'C', 'F', 'Q', 'U', 'L', 'L'],
  ['S', 'E', 'I', 'N', 'F', 'E', 'H', 'D'],
  ['Y', 'F', 'C', 'F', 'Q', 'U', 'L', 'L'],
  ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
  ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
  ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
  ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
  ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
  ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
];

const wordSearch = (letters, word) => {
  if (letters.length === 0) {
    return undefined;
  }
  const newArray = [];
  for (let i = 0; i < letters.length; i++) {
    newArray.push([]);
    for (let j = 0; j <= letters[i].length; j++) {
      newArray[i].push(letters[j][i]);
    }
  }

  const verticalJoin = newArray.map(ls => ls.join(''));
  for (let l of verticalJoin) {
    if (l.includes(word))
      return true;
  }

  const horizontalJoin = letters.map(ls => ls.join(''));
  for (let l of horizontalJoin) {
    if (l.includes(word)) return true;
  }

  return false;
};

wordSearch(letters);
module.exports = wordSearch;