function oddishEvenish(number) {
  const splitNum = number.toString().split('');
  const toNum = splitNum.map((num) => +num);
  const sum = toNum.reduce((partialSum, a) => partialSum + a, 0);

  if (sum % 2 === 0) {
    return 'evenish';
  } else {
    return 'oddish';
  }
}
console.log(oddishEvenish(121));

function fizzBuzz(number) {
  const arr = [];
  for (let i = 1; i < number; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      arr.push('FizzBuzz');
    } else if (i % 3 === 0) {
      arr.push('Fizz');
    } else if (i % 5 === 0) {
      arr.push('Buzz');
    } else {
      arr.push(i);
    }
  }
  return arr;
}

console.log(fizzBuzz(16));

// sort input alpha, compare the two inputs, if equal, return truw

function anagrams(wordOne, wordTwo) {
  const wordOneAlpha = wordOne.split('').sort().join('');
  const wordTwoAlpha = wordTwo.split('').sort().join('');

  if (wordOneAlpha === wordTwoAlpha) {
    return true;
  } else {
    return false;
  }
}

console.log(anagrams('superintended', 'unpredestined'));
console.log(anagrams('pictorialness', 'documentarily'));

// map over strings and
function uniqueString(strings) {
  strings.map((string) => {
    [string.split('')];
  });
}

console.log(
  uniqueString(['Aa', 'aaa', 'aaaaa', 'BbBb', 'Aaaa', 'AaAaAa', 'a'])
);
