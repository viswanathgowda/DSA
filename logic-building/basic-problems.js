//Q1. Given a number n, check whether it is even or odd. Return true for even and false for odd.
//Example1
function isOddorEven(n) {
  if (n % 2 === 0) {
    return "even";
  } else {
    return "odd";
  }
}
//Example2
// bitwsie operation - bit wise operatioin coimpares each bit like if n is 2.,
// then 2 is 10 in binary and 1 is 01 so 10 & 01 = 00 (comparing each bit 1 & 0, 0 & 1)so it is even
function isOddorEvenBitwiseOp(n) {
  if (n & (1 === 1)) {
    return "odd";
  } else {
    return "even";
  }
}
//Example3
//bitwise shift operation: shift LSB to right(>>), and then to left(<<) and compare(==) with original number
function isOddorEvenBitwiseShift(n) {
  if (n == (n >> 1) << 1) {
    return "even";
  } else {
    return "odd";
  }
}

//Q2. Program to print multiplication table of a number
//Example1: Iterative Approach – O(1) Time and O(1) Space
function multiplicationTable(n) {
  for (let i = 0; i < 10; i++) {
    console.log(`${n} * ${i} = ${n * i}`);
  }
}

//Example2: Recursive Approach – O(1) Time and O(1) Space
function multiplicationTableRec(n, i = 0) {
  if (i === 10) {
    return;
  }

  console.log(`${n} * ${i} = ${n * i}`);
  i++;
  multiplicationTableRec(n, i);
}

// Q3. Program to find sum of first n natural numbers. n(n+1)/2
//n natural numbers : 1,2,3,4,5, etc.
function sumOfFistnNaturalNumbers(n) {
  console.log(n, (n * (n + 1)) / 2);
  return (n * (n + 1)) / 2;
}
function sumOfFistnNaturalNumbersItr(n) {
  if (n === 0) {
    return 0;
  } else {
    const intN = parseInt(n);
    let sum = 0;
    for (let i = 1; i < intN + 1; i++) {
      sum += i;
    }
    return sum;
  }
}

module.exports = {
  isOddorEven,
  isOddorEvenBitwiseOp,
  isOddorEvenBitwiseShift,
  multiplicationTable,
  multiplicationTableRec,
  sumOfFistnNaturalNumbers,
  sumOfFistnNaturalNumbersItr,
};

if (require.main === module) {
  const [, , funcName, ...arg] = process.argv;
  if (module.exports[funcName]) {
    console.log(module.exports[funcName](...arg));
  } else {
    console.log(`${funcName}Function not found`);
  }
}
