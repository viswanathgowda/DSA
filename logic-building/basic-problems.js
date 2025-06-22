/**
 * Q1. Given a number n, check whether it is even or odd. Return true for even and false for odd.
 * Q1 Example1
 */
export function isOddorEven(n) {
  if (n % 2 === 0) {
    return "even";
  } else {
    return "odd";
  }
}
/**
 * Q1 Example2
 * bitwsie operation - bit wise operatioin compares each bit like if n is 2.,
 * then 2 is 10 in binary and 1 is 01 so 10 & 01 = 00 (comparing each bit 1 & 0, 0 & 1)so it is even
 * @param {number} n
 * @returns
 */
export function isOddorEvenBitwiseOp(n) {
  if (n & (1 === 1)) {
    return "odd";
  } else {
    return "even";
  }
}
/**
 * Q1 Example3
 * Q1bitwise shift operation: shift LSB to right(>>), and then to left(<<) and compare(==) with original number
 * @param {number} n
 * @returns
 */
export function isOddorEvenBitwiseShift(n) {
  if (n == (n >> 1) << 1) {
    return "even";
  } else {
    return "odd";
  }
}

/**
 * Q2. Program to print multiplication table of a number
 * Q2 Example1: Iterative Approach – O(1) Time and O(1) Space
 * @param {number} n
 */

export function multiplicationTable(n) {
  for (let i = 0; i < 10; i++) {
    console.log(`${n} * ${i} = ${n * i}`);
  }
}

/**
 * Q2 Example2: Recursive Approach – O(1) Time and O(1) Space
 * @param {number} n
 * @param {number} i counter
 * @returns
 */

export function multiplicationTableRec(n, i = 0) {
  if (i === 10) {
    return;
  }

  console.log(`${n} * ${i} = ${n * i}`);
  i++;
  multiplicationTableRec(n, i);
}

/**
 * Q3. Program to find sum of first n natural numbers. n(n+1)/2
 * n natural numbers : 1,2,3,4,5, etc.
 * Q3 Example 1: Using Formula
 * @param {number} num
 * @returns
 */

export function sumOfFistnNaturalNumbers(num) {
  const n = Number(num);
  const dividend = n * (n + 1);
  const divisor = 2;
  console.log(n, "dividnd", dividend);
  return dividend / divisor;
}

/**
 * Q3Example 2: Iterative
 */
export function sumOfFistnNaturalNumbersItr(n) {
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

/**
 * Q3 Example 3: Recursive
 * @param {Number} n
 * @param {Number} x
 * @param {Number} sum
 * @returns
 */
export function sumOfFistnNaturalNumbersRec(n, x = 0, sum = 0) {
  n = Number(n);
  if (x > n) {
    return sum;
  }
  return sumOfFistnNaturalNumbersRec(n, x + 1, sum + x);
}

/**
 * Q4. Swap two numbers
 * Q4Example 1: using third variable
 * @param {Number} a
 * @param {Number} b
 * @returns
 */

export function swapTwoNos(a, b) {
  const temp = a;
  a = b;
  b = temp;
  return `a:${a}, b:${b}`;
}

/**
 * Q4 Example 2: destructuring
 * @param {Number} a
 * @param {Number} b
 * @returns
 */
export function swapTwoNosDest(a, b) {
  [b, a] = [a, b];
  return `a: ${a}, b:${b}`;
}

/**
 * Q4 Example 3: without using 3rd variable - using Arithmetic operation
 * @param {Number} a
 * @param {Number} b
 * @returns
 */
export function swapTwoNosArith(a, b) {
  a = Number(a) + Number(b); // 2 + 3 = 5
  b = a - b; // 5 - 3 = 2
  a = a - b; // 5 - 2 = 3

  return `a: ${a}, b: ${b}`;
}

/**
 * Q4 Example 4: without using 3rd vairable - using bitwise XOR(^) operator
 * @param {Number} a
 * @param {Number} b
 * @returns
 */

export function swapTwoNosBitwise(a, b) {
  a = a ^ b;
  b = b ^ a;
  a = a ^ b;
  return `a: ${a}, b: ${b}`;
}

/**
 * Q5 Find the number closest to n and divisible by m
 * print the max absolute number closes to n
 * means -13, -18 then -18 will max absolute no
 * Q5.1 Example: Iterative Checking - O(m) Time and O(1) Space
 * The basic idea is to start checking from n - m to n + m one by one and take the closest number.
 */

export function closestNumber(n, m) {
  let closest = 0;
  let minDifference = Infinity;

  // Check numbers around n
  for (let i = n - Math.abs(m); i <= n + Math.abs(m); i++) {
    if (i % m === 0) {
      let difference = Math.abs(n - i);

      if (
        difference < minDifference ||
        (difference === minDifference && Math.abs(i) > Math.abs(closest))
      ) {
        closest = i;
        minDifference = difference;
      }
    }
  }
  return closest;
}

/**
 * Q5.2 Example: By finding Quotient - O(1) Time and O(1) Space
 */

export function closestNumberByQuo(n, m) {
  const q = parseInt(n / m);
  console.log("q", q);
  const n1 = m * q;
  const n2 = m * n > 0 ? m * (q + 1) : m * (q - 1);
  console.log("n1,n2", n1, n2);
  if (Math.abs(n - n1) < Math.abs(n - n2)) {
    return n1;
  } else {
    return n2;
  }
}

/**
 * find closest number to 0
 * @param {Number[]} n
 */
export function closestNumberToZero(n) {
  let closestNumber = Infinity;
  for (let num of n) {
    if (
      Math.abs(num) < Math.abs(closestNumber) ||
      (Math.abs(num) === Math.abs(closestNumber) &&
        Math.abs(num) > Math.abs(closestNumber))
    ) {
      closestNumber = num;
    }
  }
  return closestNumber;
}

/**
 * fibonacci series 0, 1, 1, 2,3,5...
 * addition last two prev numbers like 0+1 = 1, 1+1=2, 1+2=3, etc.
 */
export function fibonacci(n) {
  let a = 0,
    b = 1;
  for (let i = 0; i < n; i++) {
    const temp = a + b;
    a = b;
    b = temp;
  }
  return a;
}

/**
 * Q6: The dice problem
 * You are given a cubic dice with 6 faces. All the individual faces have a number printed on them. The numbers are in the range of 1 to 6,
 * like any ordinary dice. You will be provided with a face of this cube, your task is to guess the number on the opposite face of the cube.
 * 1-6,2-5,3-4 always 1,2,3 contains common corner and 1 will be opposite of 6
 * Q6.1 Example: Using if-else Statement
 * @param {Number} n
 * @return { Number}
 */

export function guessDiceOppFace_ifels(n) {
  if (n === 1) {
    return 6;
  } else if (n === 2) {
    return 5;
  } else if (n === 3) {
    return 4;
  } else if (n === 4) {
    return 3;
  } else if (n === 5) {
    return 2;
  } else if (n === 6) {
    return 1;
  }
}

/**
 * Q6.2 Example: sum of dice - face
 */

export function guessDiceOppFace_sumOfFaces(n) {
  /**total sum of facess in cubic dice is 7 */
  return 7 - n;
}

/**
 * Q7: Nth term of AP from First Two Terms
 * Given two integers a1 and a2, the first and second terms of an Arithmetic Series respectively, the problem is to find the nth term of the series.
 * Q7.1 Example: NthTermofAp using loop
 */

export function NthTermOfApLoop(a1, a2, n) {
  let NthTerm = parseInt(a1);
  let diff = parseInt(a2) - parseInt(a1);
  for (let i = 1; i < n; i++) {
    NthTerm += diff;
  }
  return NthTerm;
}

/**
 * Q7.2 Example: Using the Formula for nth Term
 * We know the Arithmetic Progression series is like =  2, 3, 4, 5, 6. …. … 
  In this series 2 is the first term and 3 is the second term of the series . 
  Common difference = a2 - a1 =  3 – 2 = 1 (Difference common in the series). 
  so we can write the series as :
  t1 = a1 
  t2 = a1 + (2-1) * d 
  t3 = a1 + (3-1) * d 
  . 
  . 
  . 
  tN = a1 + (n-1) * d 

  tN = a1 + (n-1) * (a2-a1) 
 */

export function NthTermOfApFormula(a1, a2, n) {
  const NthTerm =
    parseInt(a1) + (parseInt(n) - 1) * (parseInt(a2) - parseInt(a1));
  return NthTerm;
}

/**
 * Q8: Sum of Digits of a Number
 * Given a number n, find the sum of its digits.
 * Q8.1 Example:
 */
