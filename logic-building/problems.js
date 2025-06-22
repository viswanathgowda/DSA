/**list all the problems */
import {
  isOddorEven,
  isOddorEvenBitwiseOp,
  isOddorEvenBitwiseShift,
  multiplicationTable,
  multiplicationTableRec,
  sumOfFistnNaturalNumbers,
  sumOfFistnNaturalNumbersItr,
  sumOfFistnNaturalNumbersRec,
  swapTwoNos,
  swapTwoNosDest,
  swapTwoNosArith,
  swapTwoNosBitwise,
  closestNumber,
  closestNumberByQuo,
  closestNumberToZero,
  closestNumberToZero,
  guessDiceOppFace_ifels,
  guessDiceOppFace_sumOfFaces,
  NthTermOfApLoop,
  NthTermOfApFormula,
} from "./basic-problems.js";

/**
 * -----------
 * Basic Problems
 *
 * Q1: Odd or Even Problems
 * - Q1.1: @see isOddorEven(n)
 * - Q1.2: @see isOddorEvenBitwiseOp(n)
 * - Q1.3: @see isOddorEvenBitwiseShift(n)
 *
 * Q2: Multiplication Table
 * - Q2.1: @see multiplicationTable(n)
 * - Q2.2: @see multiplicationTableRec(n,i) recursive
 *
 * Q3: Sum of First N Natural Numbers
 * - Q3.1: @see sumOfFistnNaturalNumbers(n)
 * - Q3.2: @see sumOfFistnNaturalNumbersItr(n) iterating
 * - Q3.3: @see sumOfFistnNaturalNumbersRec(n,x=0,sum=0) recursive
 *
 * Q4: Swap two numbers
 * - Q4.1: @see swapTwoNos(a,b) third variable
 * - Q4.2: @see swapTwoNosDest(a,b) destructering
 * - Q4.3: @see swapTwoNosArith(a,b) without using 3rd variable - using Arithmetic operation
 * - Q4.4: @see swapTwoNosBitwise(a,b) without using 3rd vairable - using bitwise XOR(^) operator
 *
 * Q5: Find the number closest to n and divisible by m print the max absolute number closes to n
 * - Q5.1: @see closestNumber(n,m) Iterative Checking - O(m) Time and O(1) Space
 * - Q5.2: @see closestNumberByQuo(n,m) By finding Quotient - O(1) Time and O(1) Space
 * - Q5.3 @see closestNumberToZero(n) find number to close to zero
 *
 * Q6: The dice problem, find opposite face
 * - Q6.1: @see guessDiceOppFace_ifels(n) Using if-else Statement
 * - Q6.2: @see guessDiceOppFace_sumOfFaces(n) Sum of dice faceses minus face
 *
 * Q7: Nth term of AP from First Two Terms
 * - Q7.1: @see NthTermOfApLoop(a1,a2,n) using iteration, differnce
 * - Q7.2: @see NthTermOfApFormula(a1,a2,n) using formula Nth = a1 * (n -1) * (a2-a1)
 *
 * Q8: Fibnoccie series
 * @see closestNumberToZero(n)
 *
 * -----------
 * Easy problems
 * Q9: Sum of Digits of a Number
 * -
 */
