# Algorithmic Patterns: Problems and Solutions

This document provides a collection of problems for each algorithmic pattern: Two Pointers, Sliding Window, Recursion, Hashing, BFS/DFS, Binary Search, and Greedy Algorithms. Each pattern includes at least 30 problems (10 Easy, 10 Medium, 10 Difficult), with descriptions and multiple solution approaches.

---

## Two Pointers

- **Concept**:Uses two pointers to traverse an array or list, often moving towards each other or in the same direction, to solve problems efficiently, typically in O(n) time. Common for problems involving arrays, strings, or linked lists.
- **Use Cases**: finding pairs with a specific sum, removing duplicates, or partitioning arrays.
- **Example**: Finding two numbers in a sorted array that sum to a target (e.g., Two Sum II).

### Easy Problems

1. **Reverse String**
   - **Description**: Reverse a string in-place.
   - **Solution 1 (Brute Force)**: Create a new string and copy characters in reverse order. Time: O(n), Space: O(n).
   - **Solution 2 (Two Pointers)**: Use two pointers (left, right) to swap characters from ends to middle. Time: O(n), Space: O(1).
2. **Check Palindrome**

   - **Description**: Check if a string is a palindrome, ignoring non-alphanumeric characters.
   - **Solution 1 (Brute Force)**: Clean string, reverse it, and compare. Time: O(n), Space: O(n).
   - **Solution 2 (Two Pointers)**: Use pointers to compare characters from ends, skipping non-alphanumeric. Time: O(n), Space: O(1).

3. **Two Sum II (Sorted Array)**

   - **Description**: Given a sorted array, find two numbers that sum to a target.
   - **Solution 1 (Brute Force)**: Check all pairs. Time: O(n²), Space: O(1).
   - **Solution 2 (Two Pointers)**: Use left and right pointers, adjust based on sum. Time: O(n), Space: O(1).

4. **Remove Duplicates from Sorted Array**

   - **Description**: Remove duplicates in-place from a sorted array, return new length.
   - **Solution 1 (Brute Force)**: Use a set to track unique elements. Time: O(n), Space: O(n).
   - **Solution 2 (Two Pointers)**: Use slow and fast pointers to overwrite duplicates. Time: O(n), Space: O(1).

5. **Move Zeroes**

   - **Description**: Move all zeros to the end of an array, maintaining order of non-zero elements.
   - **Solution 1 (Brute Force)**: Collect non-zeros, then append zeros. Time: O(n), Space: O(n).
   - **Solution 2 (Two Pointers)**: Use a pointer for next non-zero position, then fill rest with zeros. Time: O(n), Space: O(1).

6. **Valid Palindrome II**

   - **Description**: Check if a string can be a palindrome by removing at most one character.
   - **Solution 1 (Brute Force)**: Try removing each character and check palindrome. Time: O(n²), Space: O(1).
   - **Solution 2 (Two Pointers)**: Use pointers, skip one mismatch, and check rest. Time: O(n), Space: O(1).

7. **Container With Most Water**

   - **Description**: Given heights of lines, find two lines forming a container with max area.
   - **Solution 1 (Brute Force)**: Check all pairs of lines. Time: O(n²), Space: O(1).
   - **Solution 2 (Two Pointers)**: Use pointers at ends, move based on smaller height. Time: O(n), Space: O(1).

8. **Merge Sorted Arrays**

   - **Description**: Merge two sorted arrays into one sorted array in-place.
   - **Solution 1 (Brute Force)**: Copy to new array, sort. Time: O(n log n), Space: O(n).
   - **Solution 2 (Two Pointers)**: Use pointers from ends of both arrays, fill from end. Time: O(n), Space: O(1).

9. **Intersection of Two Arrays**

   - **Description**: Find common elements in two sorted arrays.
   - **Solution 1 (Brute Force)**: Use nested loops to compare. Time: O(n²), Space: O(1).
   - **Solution 2 (Two Pointers)**: Use pointers to traverse both arrays, add matches. Time: O(n), Space: O(min(n,m)).

10. **Squares of a Sorted Array**
    - **Description**: Given a sorted array, return array of squares in sorted order.
    - **Solution 1 (Brute Force)**: Square each element, sort result. Time: O(n log n), Space: O(n).
    - **Solution 2 (Two Pointers)**: Use pointers at ends, compare squares, fill result from end. Time: O(n), Space: O(n).

### Medium Problems

11. **3Sum**

    - **Description**: Find all unique triplets in an array that sum to zero.
    - **Solution 1 (Brute Force)**: Check all triplets. Time: O(n³), Space: O(1).
    - **Solution 2 (Two Pointers)**: Sort array, fix one element, use two pointers for rest. Time: O(n²), Space: O(1).

12. **Sort Colors**

    - **Description**: Sort an array of 0s, 1s, and 2s in-place.
    - **Solution 1 (Brute Force)**: Use counting sort with extra space. Time: O(n), Space: O(1).
    - **Solution 2 (Two Pointers)**: Use pointers for 0s and 2s, swap elements. Time: O(n), Space: O(1).

13. **Partition Array**

    - **Description**: Partition array around a pivot, elements less than pivot come before, others after.
    - **Solution 1 (Brute Force)**: Use extra arrays for partitioning. Time: O(n), Space: O(n).
    - **Solution 2 (Two Pointers)**: Use pointers to swap elements in-place. Time: O(n), Space: O(1).

14. **Trapping Rain Water**

    - **Description**: Compute how much water can be trapped between bars of given heights.
    - **Solution 1 (Brute Force)**: For each bar, find max left and right heights. Time: O(n²), Space: O(1).
    - **Solution 2 (Two Pointers)**: Use pointers to track max heights from both ends. Time: O(n), Space: O(1).

15. **Longest Word in Dictionary through Deleting**

    - **Description**: Find longest word in dictionary formed by deleting characters from a string.
    - **Solution 1 (Brute Force)**: Check each word for subsequence. Time: O(n\*m), Space: O(1).
    - **Solution 2 (Two Pointers)**: Use pointers to check if word is subsequence. Time: O(n\*m), Space: O(1).

16. **Minimum Window Substring**

    - **Description**: Find smallest substring containing all characters of another string.
    - **Solution 1 (Brute Force)**: Check all substrings. Time: O(n³), Space: O(1).
    - **Solution 2 (Two Pointers)**: Use sliding window with two pointers and hash map. Time: O(n), Space: O(1).

17. **Find All Anagrams in a String**

    - **Description**: Find all starting indices of anagrams of a pattern in a string.
    - **Solution 1 (Brute Force)**: Check each substring for anagram. Time: O(n\*m), Space: O(1).
    - **Solution 2 (Two Pointers)**: Use sliding window with character frequency map. Time: O(n), Space: O(1).

18. **Remove Nth Node From End of List**

    - **Description**: Remove the nth node from the end of a linked list.
    - **Solution 1 (Brute Force)**: Find length, then remove node. Time: O(n), Space: O(1).
    - **Solution 2 (Two Pointers)**: Use fast and slow pointers with n-gap. Time: O(n), Space: O(1).

19. **Subarray Product Less Than K**

    - **Description**: Count subarrays with product less than k.
    - **Solution 1 (Brute Force)**: Check all subarrays. Time: O(n²), Space: O(1).
    - **Solution 2 (Two Pointers)**: Use sliding window with product tracking. Time: O(n), Space: O(1).

20. **Longest Subarray with Equal 0s and 1s**
    - **Description**: Find longest subarray with equal number of 0s and 1s.
    - **Solution 1 (Brute Force)**: Check all subarrays for equal counts. Time: O(n²), Space: O(1).
    - **Solution 2 (Two Pointers)**: Use prefix sum with hash map and two pointers. Time: O(n), Space: O(n).

### Difficult Problems

21. **4Sum**

    - **Description**: Find all unique quadruplets in an array that sum to a target.
    - **Solution 1 (Brute Force)**: Check all quadruplets. Time: O(n⁴), Space: O(1).
    - **Solution 2 (Two Pointers)**: Sort, fix two elements, use two pointers for rest. Time: O(n³), Space: O(1).

22. **Median of Two Sorted Arrays**

    - **Description**: Find median of two sorted arrays of different sizes.
    - **Solution 1 (Brute Force)**: Merge arrays, find median. Time: O(n+m), Space: O(n+m).
    - **Solution 2 (Two Pointers)**: Use binary search with two pointers for partitioning. Time: O(log(min(n,m))), Space: O(1).

23. **Longest Valid Parentheses**

    - **Description**: Find length of longest valid parentheses substring.
    - **Solution 1 (Brute Force)**: Check all substrings for validity. Time: O(n³), Space: O(1).
    - **Solution 2 (Two Pointers)**: Use stack or two-pass pointers to track balance. Time: O(n), Space: O(1).

24. **Minimum Size Subarray Sum**

    - **Description**: Find shortest subarray with sum at least k.
    - **Solution 1 (Brute Force)**: Check all subarrays. Time: O(n²), Space: O(1).
    - **Solution 2 (Two Pointers)**: Use sliding window with prefix sums. Time: O(n), Space: O(1).

25. **Reverse Pairs**

    - **Description**: Count pairs (i,j) where i < j and nums[i] > 2\*nums[j].
    - **Solution 1 (Brute Force)**: Check all pairs. Time: O(n²), Space: O(1).
    - **Solution 2 (Two Pointers)**: Use merge sort with two pointers. Time: O(n log n), Space: O(n).

26. **Shortest Unsorted Continuous Subarray**

    - **Description**: Find shortest subarray that, when sorted, makes entire array sorted.
    - **Solution 1 (Brute Force)**: Sort copy, compare with original. Time: O(n log n), Space: O(n).
    - **Solution 2 (Two Pointers)**: Find boundaries of unsorted region. Time: O(n), Space: O(1).

27. **Find K Pairs with Smallest Sums**

    - **Description**: Find k pairs with smallest sums from two sorted arrays.
    - **Solution 1 (Brute Force)**: Compute all pairs, sort by sum. Time: O(n*m*log(n*m)), Space: O(n*m).
    - **Solution 2 (Two Pointers)**: Use priority queue with pointers. Time: O(k\*log(min(n,m))), Space: O(k).

28. **Max Chunks To Make Sorted**

    - **Description**: Split array into max chunks that can be sorted individually to make entire array sorted.
    - **Solution 1 (Brute Force)**: Try all possible splits. Time: O(n!), Space: O(n).
    - **Solution 2 (Two Pointers)**: Track max value and chunk boundaries. Time: O(n), Space: O(1).

29. **Next Greater Element III**

    - **Description**: Find next greater number using same digits.
    - **Solution 1 (Brute Force)**: Generate all permutations, find next. Time: O(n!), Space: O(n).
    - **Solution 2 (Two Pointers)**: Find first decreasing digit, swap with next greater, reverse rest. Time: O(n), Space: O(1).

30. **Kth Smallest Number in Multiplication Table**
    - **Description**: Find kth smallest number in a multiplication table of size m x n.
    - **Solution 1 (Brute Force)**: Generate all products, sort, find kth. Time: O(m*n*log(m*n)), Space: O(m*n).
    - **Solution 2 (Two Pointers)**: Use binary search with two pointers to count elements. Time: O(m*log(m*n)), Space: O(1).

---

## Sliding Window

- **Concept**: Maintains a "window" of elements that expands or contracts based on conditions, optimizing subarray or substring problems. Can be fixed-size or variable-size.
- **Use Cases**: Maximum/minimum sum of a subarray of size k, longest substring with unique characters.
- **Example**: Longest substring without repeating characters.

### Easy Problems

1. **Maximum Average Subarray I**

   - **Description**: Find subarray of size k with maximum average.
   - **Solution 1 (Brute Force)**: Compute sum for each subarray of size k. Time: O(n\*k), Space: O(1).
   - **Solution 2 (Sliding Window)**: Slide window of size k, update sum. Time: O(n), Space: O(1).

2. **Contains Duplicate II**

   - **Description**: Check if any duplicate exists within k indices.
   - **Solution 1 (Brute Force)**: Check each window of size k. Time: O(n\*k), Space: O(1).
   - **Solution 2 (Sliding Window)**: Use hash set in window of size k. Time: O(n), Space: O(k).

3. **Longest Substring with At Most K Distinct Characters**

   - **Description**: Find longest substring with at most k distinct characters.
   - **Solution 1 (Brute Force)**: Check all substrings. Time: O(n²), Space: O(n).
   - **Solution 2 (Sliding Window)**: Use hash map to track characters in window. Time: O(n), Space: O(k).

4. **Minimum Size Subarray Sum**

   - **Description**: Find shortest subarray with sum at least k.
   - **Solution 1 (Brute Force)**: Check all subarrays. Time: O(n²), Space: O(1).
   - **Solution 2 (Sliding Window)**: Slide window to find minimal length. Time: O(n), Space: O(1).

5. **Max Consecutive Ones**

   - **Description**: Find longest sequence of 1s in binary array.
   - **Solution 1 (Brute Force)**: Check all subarrays for 1s. Time: O(n²), Space: O(1).
   - **Solution 2 (Sliding Window)**: Slide window to count consecutive 1s. Time: O(n), Space: O(1).

6. **Longest Repeating Character Replacement**

   - **Description**: Find longest substring with at most k replacements to make all same.
   - **Solution 1 (Brute Force)**: Try each substring and count replacements. Time: O(n²), Space: O(1).
   - **Solution 2 (Sliding Window)**: Use window with frequency map, shrink if invalid. Time: O(n), Space: O(1).

7. **Fruit Into Baskets**

   - **Description**: Collect maximum fruits with at most two types.
   - **Solution 1 (Brute Force)**: Check all subarrays for two types. Time: O(n²), Space: O(1).
   - **Solution 2 (Sliding Window)**: Use hash map to track types in window. Time: O(n), Space: O(1).

8. **Max Sum of Subarray of Size K**

   - **Description**: Find maximum sum of subarray of size k.
   - **Solution 1 (Brute Force)**: Compute sum for each k-sized subarray. Time: O(n\*k), Space: O(1).
   - **Solution 2 (Sliding Window)**: Slide window, update sum by adding/removing. Time: O(n), Space: O(1).

9. **Number of Subarrays with Sum K**

   - **Description**: Count subarrays with sum equal to k.
   - **Solution 1 (Brute Force)**: Check all subarrays. Time: O(n²), Space: O(1).
   - **Solution 2 (Sliding Window)**: Use prefix sum with hash map (for non-negative arrays). Time: O(n), Space: O(n).

10. **Longest Substring Without Repeating Characters**
    - **Description**: Find longest substring with all unique characters.
    - **Solution 1 (Brute Force)**: Check all substrings for uniqueness. Time: O(n³), Space: O(1).
    - **Solution 2 (Sliding Window)**: Use window with hash set to track characters. Time: O(n), Space: O(1).

### Medium Problems

11. **Permutation in String**

    - **Description**: Check if a string contains a permutation of another string.
    - **Solution 1 (Brute Force)**: Generate all permutations, check presence. Time: O(n!), Space: O(n).
    - **Solution 2 (Sliding Window)**: Use window of pattern length, compare frequency. Time: O(n), Space: O(1).

12. **Minimum Window Substring**

    - **Description**: Find smallest substring containing all characters of another string.
    - **Solution 1 (Brute Force)**: Check all substrings. Time: O(n³), Space: O(1).
    - **Solution 2 (Sliding Window)**: Use window with frequency map. Time: O(n), Space: O(1).

13. **Subarray Product Less Than K**

    - **Description**: Count subarrays with product less than k.
    - **Solution 1 (Brute Force)**: Check all subarrays. Time: O(n²), Space: O(1).
    - **Solution 2 (Sliding Window)**: Slide window, track product. Time: O(n), Space: O(1).

14. **Longest Substring with At Least K Repeating Characters**

    - **Description**: Find longest substring where each character appears at least k times.
    - **Solution 1 (Brute Force)**: Check all substrings. Time: O(n²), Space: O(n).
    - **Solution 2 (Sliding Window)**: Use window with frequency map, split by character count. Time: O(n), Space: O(1).

15. **Find All Anagrams in a String**

    - **Description**: Find all starting indices of anagrams of a pattern in a string.
    - **Solution 1 (Brute Force)**: Check each substring for anagram. Time: O(n\*m), Space: O(1).
    - **Solution 2 (Sliding Window)**: Use window with frequency map. Time: O(n), Space: O(1).

16. **Maximum Points You Can Obtain from Cards**

    - **Description**: Pick k cards from ends of array to maximize sum.
    - **Solution 1 (Brute Force)**: Try all k combinations. Time: O(k\*n), Space: O(1).
    - **Solution 2 (Sliding Window)**: Use window of size n-k, minimize middle sum. Time: O(n), Space: O(1).

17. **Longest Subarray with Equal 0s and 1s**

    - **Description**: Find longest subarray with equal number of 0s and 1s.
    - **Solution 1 (Brute Force)**: Check all subarrays. Time: O(n²), Space: O(1).
    - **Solution 2 (Sliding Window)**: Use prefix sum with hash map. Time: O(n), Space: O(n).

18. **Minimum Swaps to Group All 1s Together**

    - **Description**: Find minimum swaps to group all 1s in a binary array.
    - **Solution 1 (Brute Force)**: Try all groupings. Time: O(n²), Space: O(1).
    - **Solution 2 (Sliding Window)**: Use window of size equal to number of 1s. Time: O(n), Space: O(1).

19. **Longest Substring with At Most Two Distinct Characters**

    - **Description**: Find longest substring with at most two distinct characters.
    - **Solution 1 (Brute Force)**: Check all substrings. Time: O(n²), Space: O(1).
    - **Solution 2 (Sliding Window)**: Use window with hash map. Time: O(n), Space: O(1).

20. **Subarrays with K Different Integers**
    - **Description**: Count subarrays with exactly k distinct integers.
    - **Solution 1 (Brute Force)**: Check all subarrays. Time: O(n²), Space: O(n).
    - **Solution 2 (Sliding Window)**: Use window with at-most-k minus at-most-(k-1). Time: O(n), Space: O(n).

### Difficult Problems

21. **Minimum Window Subsequence**

    - **Description**: Find shortest subsequence in string containing another string as subsequence.
    - **Solution 1 (Brute Force)**: Check all subsequences. Time: O(n²), Space: O(n).
    - **Solution 2 (Sliding Window)**: Use DP with sliding window. Time: O(n\*m), Space: O(n).

22. **Sliding Window Maximum**

    - **Description**: Find maximum in each window of size k in array.
    - **Solution 1 (Brute Force)**: Find max for each window. Time: O(n\*k), Space: O(1).
    - **Solution 2 (Sliding Window)**: Use deque to track max. Time: O(n), Space: O(k).

23. **Minimum Number of K Consecutive Bit Flips**

    - **Description**: Find minimum flips to make all bits 1 in k-sized windows.
    - **Solution 1 (Brute Force)**: Try flipping each window. Time: O(n\*k), Space: O(1).
    - **Solution 2 (Sliding Window)**: Use queue to track flips in window. Time: O(n), Space: O(k).

24. **Longest Substring with K Distinct Characters**

    - **Description**: Find longest substring with exactly k distinct characters.
    - **Solution 1 (Brute Force)**: Check all substrings. Time: O(n²), Space: O(n).
    - **Solution 2 (Sliding Window)**: Use window with frequency map. Time: O(n), Space: O(k).

25. **Shortest Subarray with Sum at Least K**

    - **Description**: Find shortest subarray with sum at least k (can include negatives).
    - **Solution 1 (Brute Force)**: Check all subarrays. Time: O(n²), Space: O(1).
    - **Solution 2 (Sliding Window)**: Use deque with prefix sums. Time: O(n), Space: O(n).

26. **Constrained Subsequence Sum**

    - **Description**: Find max sum of non-empty subsequence with indices differing by at most k.
    - **Solution 1 (Brute Force)**: Try all valid subsequences. Time: O(2^n), Space: O(n).
    - **Solution 2 (Sliding Window)**: Use deque for sliding window max. Time: O(n), Space: O(k).

27. **Maximum Sum of Almost Unique Subarray**

    - **Description**: Find max sum of subarray with at most m distinct elements.
    - **Solution 1 (Brute Force)**: Check all subarrays. Time: O(n²), Space: O(n).
    - **Solution 2 (Sliding Window)**: Use window with frequency map. Time: O(n), Space: O(m).

28. **Longest Substring with Same Letters after Replacement**

    - **Description**: Find longest substring with at most k replacements to same letter.
    - **Solution 1 (Brute Force)**: Check all substrings. Time: O(n²), Space: O(1).
    - **Solution 2 (Sliding Window)**: Use window with max frequency tracking. Time: O(n), Space: O(1).

29. **Max Consecutive Ones III**

    - **Description**: Find longest subarray of 1s with at most k flips from 0s.
    - **Solution 1 (Brute Force)**: Check all subarrays with k flips. Time: O(n²), Space: O(1).
    - **Solution 2 (Sliding Window)**: Slide window, track flips. Time: O(n), Space: O(1).

30. **Subarray with K Different Integers**
    - **Description**: Count subarrays with exactly k distinct integers.
    - **Solution 1 (Brute Force)**: Check all subarrays. Time: O(n²), Space: O(n).
    - **Solution 2 (Sliding Window)**: Use at-most-k minus at-most-(k-1). Time: O(n), Space: O(n).

---

## Recursion

- **Concept**: Solves problems by breaking them into smaller subproblems, where a function calls itself. Requires a base case to terminate.
- **Use Cases**: Tree traversals, factorial computation, backtracking problems.
- **Example**: Computing Fibonacci numbers or generating permutations.

### Easy Problems

1. **Factorial**

   - **Description**: Compute factorial of a number n.
   - **Solution 1 (Iterative)**: Use loop to multiply numbers. Time: O(n), Space: O(1).
   - **Solution 2 (Recursion)**: n! = n \* (n-1)!. Time: O(n), Space: O(n).

2. **Fibonacci Number**

   - **Description**: Compute nth Fibonacci number.
   - **Solution 1 (Iterative)**: Use loop with two variables. Time: O(n), Space: O(1).
   - **Solution 2 (Recursion)**: F(n) = F(n-1) + F(n-2). Time: O(2^n), Space: O(n).

3. **Power Function**

   - **Description**: Compute x^n for given x and n.
   - **Solution 1 (Iterative)**: Multiply x n times. Time: O(n), Space: O(1).
   - **Solution 2 (Recursion)**: Use divide-and-conquer, x^n = x^(n/2) \* x^(n/2). Time: O(log n), Space: O(log n).

4. **Reverse Linked List**

   - **Description**: Reverse a singly linked list.
   - **Solution 1 (Iterative)**: Use three pointers to reverse links. Time: O(n), Space: O(1).
   - **Solution 2 (Recursion)**: Recursively reverse rest, adjust pointers. Time: O(n), Space: O(n).

5. **Sum of Digits**

   - **Description**: Compute sum of digits of a number.
   - **Solution 1 (Iterative)**: Extract digits using division. Time: O(log n), Space: O(1).
   - **Solution 2 (Recursion)**: Sum = digit + sum(rest). Time: O(log n), Space: O(log n).

6. **Count Good Numbers**

   - **Description**: Count numbers with even digits in range [1, n].
   - **Solution 1 (Iterative)**: Check each number. Time: O(n), Space: O(1).
   - **Solution 2 (Recursion)**: Recursively count valid numbers. Time: O(n), Space: O(n).

7. **Binary Tree Preorder Traversal**

   - **Description**: Traverse a binary tree in preorder (root, left, right).
   - **Solution 1 (Iterative)**: Use stack to mimic recursion. Time: O(n), Space: O(h).
   - **Solution 2 (Recursion)**: Visit root, recurse left, recurse right. Time: O(n), Space: O(h).

8. **Climbing Stairs**

   - **Description**: Find number of ways to climb n stairs, taking 1 or 2 steps.
   - **Solution 1 (Iterative)**: Use dynamic programming array. Time: O(n), Space: O(n).
   - **Solution 2 (Recursion)**: Ways(n) = Ways(n-1) + Ways(n-2). Time: O(2^n), Space: O(n).

9. **Generate Parentheses**

   - **Description**: Generate all valid combinations of n pairs of parentheses.
   - **Solution 1 (Brute Force)**: Generate all combinations, check validity. Time: O(2^(2n)), Space: O(n).
   - **Solution 2 (Recursion)**: Use backtracking with open/close counts. Time: O(4^n/sqrt(n)), Space: O(n).

10. **Print Numbers 1 to N**
    - **Description**: Print numbers from 1 to n.
    - **Solution 1 (Iterative)**: Use loop to print. Time: O(n), Space: O(1).
    - **Solution 2 (Recursion)**: Recursively print n-1, then n. Time: O(n), Space: O(n).

### Medium Problems

11. **Permutations**

    - **Description**: Generate all permutations of an array.
    - **Solution 1 (Iterative)**: Use next permutation algorithm. Time: O(n!), Space: O(1).
    - **Solution 2 (Recursion)**: Swap elements, recurse for rest. Time: O(n!), Space: O(n).

12. **Subsets**

    - **Description**: Generate all subsets of a set.
    - **Solution 1 (Iterative)**: Use bit manipulation. Time: O(2^n), Space: O(1).
    - **Solution 2 (Recursion)**: Include/exclude each element. Time: O(2^n), Space: O(n).

13. **Combination Sum**

    - **Description**: Find all combinations summing to a target.
    - **Solution 1 (Brute Force)**: Try all subsets. Time: O(2^n), Space: O(n).
    - **Solution 2 (Recursion)**: Use backtracking with remaining sum. Time: O(2^n), Space: O(n).

14. **Letter Combinations of a Phone Number**

    - **Description**: Generate all letter combinations for a digit string.
    - **Solution 1 (Iterative)**: Build combinations iteratively. Time: O(4^n), Space: O(n).
    - **Solution 2 (Recursion)**: Recurse for each digit’s letters. Time: O(4^n), Space: O(n).

15. **N-Queens**

    - **Description**: Place n queens on nxn board so no two attack each other.
    - **Solution 1 (Brute Force)**: Try all placements. Time: O(n!), Space: O(n²).
    - **Solution 2 (Recursion)**: Use backtracking with row placement. Time: O(n!), Space: O(n).

16. **Binary Tree Inorder Traversal**

    - **Description**: Traverse a binary tree in inorder (left, root, right).
    - **Solution 1 (Iterative)**: Use stack to track nodes. Time: O(n), Space: O(h).
    - **Solution 2 (Recursion)**: Recurse left, visit root, recurse right. Time: O(n), Space: O(h).

17. **Word Search**

    - **Description**: Find if a word exists in a 2D grid.
    - **Solution 1 (Brute Force)**: Check all starting points, explore all paths. Time: O(m*n*4^len), Space: O(len).
    - **Solution 2 (Recursion)**: Use DFS with backtracking. Time: O(m*n*4^len), Space: O(len).

18. **Validate Binary Search Tree**

    - **Description**: Check if a binary tree is a valid BST.
    - **Solution 1 (Iterative)**: Use inorder traversal with stack. Time: O(n), Space: O(h).
    - **Solution 2 (Recursion)**: Check node values in valid range. Time: O(n), Space: O(h).

19. **Path Sum**

    - **Description**: Check if a binary tree has a path with given sum.
    - **Solution 1 (Iterative)**: Use DFS with stack. Time: O(n), Space: O(h).
    - **Solution 2 (Recursion)**: Subtract node value, recurse left/right. Time: O(n), Space: O(h).

20. **Towers of Hanoi**
    - **Description**: Move n disks from one peg to another with constraints.
    - **Solution 1 (Iterative)**: Simulate moves with queue. Time: O(2^n), Space: O(n).
    - **Solution 2 (Recursion)**: Move n-1 disks, move largest, move n-1 again. Time: O(2^n), Space: O(n).

### Difficult Problems

21. **Sudoku Solver**

    - **Description**: Solve a partially filled 9x9 Sudoku board.
    - **Solution 1 (Brute Force)**: Try all numbers for each cell. Time: O(9^(m*n)), Space: O(m*n).
    - **Solution 2 (Recursion)**: Use backtracking to place numbers. Time: O(9^(m*n)), Space: O(m*n).

22. **Regular Expression Matching**

    - **Description**: Check if a string matches a regex pattern.
    - **Solution 1 (Brute Force)**: Try all possibilities. Time: O(2^(m+n)), Space: O(m+n).
    - **Solution 2 (Recursion)**: Use DP with recursion for matching. Time: O(m*n), Space: O(m*n).

23. **N-Queens II**

    - **Description**: Count number of ways to place n queens.
    - **Solution 1 (Brute Force)**: Try all placements. Time: O(n!), Space: O(n²).
    - **Solution 2 (Recursion)**: Use backtracking to count solutions. Time: O(n!), Space: O(n).

24. **Permutations II**

    - **Description**: Generate all unique permutations of an array with duplicates.
    - **Solution 1 (Iterative)**: Use next permutation with sorting. Time: O(n!), Space: O(1).
    - **Solution 2 (Recursion)**: Use backtracking with hash set. Time: O(n!), Space: O(n).

25. **Combination Sum II**

    - **Description**: Find unique combinations summing to target with duplicates.
    - **Solution 1 (Brute Force)**: Try all subsets. Time: O(2^n), Space: O(n).
    - **Solution 2 (Recursion)**: Use backtracking, skip duplicates. Time: O(2^n), Space: O(n).

26. **Word Ladder**

    - **Description**: Find shortest transformation sequence from start to end word.
    - **Solution 1 (BFS)**: Use BFS to find shortest path. Time: O(n\*26^l), Space: O(n).
    - **Solution 2 (Recursion)**: Use DFS with backtracking (less efficient). Time: O(26^l), Space: O(l).

27. **Longest Valid Parentheses**

    - **Description**: Find length of longest valid parentheses substring.
    - **Solution 1 (Brute Force)**: Check all substrings. Time: O(n³), Space: O(1).
    - **Solution 2 (Recursion)**: Use stack or recursive parsing. Time: O(n), Space: O(n).

28. **Binary Tree Maximum Path Sum**

    - **Description**: Find maximum path sum in a binary tree.
    - **Solution 1 (Brute Force)**: Check all paths. Time: O(n²), Space: O(h).
    - **Solution 2 (Recursion)**: Use recursion to track max path. Time: O(n), Space: O(h).

29. **Distinct Subsequences**

    - **Description**: Count distinct subsequences of one string in another.
    - **Solution 1 (Brute Force)**: Try all subsequences. Time: O(2^n), Space: O(n).
    - **Solution 2 (Recursion)**: Use DP with recursion. Time: O(m*n), Space: O(m*n).

30. **Palindrome Partitioning**
    - **Description**: Partition a string into all possible palindrome substrings.
    - **Solution 1 (Brute Force)**: Try all partitions. Time: O(2^n), Space: O(n).
    - **Solution 2 (Recursion)**: Use backtracking with palindrome check. Time: O(2^n), Space: O(n).

---

## Hashing

- **Concept**: Uses hash tables (dictionaries) to store and retrieve elements in O(1) average time, ideal for frequency counting or detecting duplicates.
- **Use Cases**: Finding duplicates, checking for anagrams, or subarray sums.
- **Example**: Finding if a subarray has a sum equal to k.

### Easy Problems

1. **Contains Duplicate**

   - **Description**: Check if an array contains any duplicates.
   - **Solution 1 (Brute Force)**: Compare each pair. Time: O(n²), Space: O(1).
   - **Solution 2 (Hashing)**: Use hash set to track elements. Time: O(n), Space: O(n).

2. **Single Number**

   - **Description**: Find the number that appears once in an array where others appear twice.
   - **Solution 1 (Brute Force)**: Count frequency of each number. Time: O(n²), Space: O(1).
   - **Solution 2 (Hashing)**: Use hash map to count frequencies. Time: O(n), Space: O(n).

3. **Intersection of Two Arrays**

   - **Description**: Find common elements in two arrays.
   - **Solution 1 (Brute Force)**: Compare each pair. Time: O(n\*m), Space: O(1).
   - **Solution 2 (Hashing)**: Use hash set for one array, check other. Time: O(n+m), Space: O(n).

4. **Happy Number**

   - **Description**: Check if a number is happy (sum of square of digits eventually reaches 1).
   - **Solution 1 (Brute Force)**: Compute sums until cycle or 1. Time: O(log n), Space: O(1).
   - **Solution 2 (Hashing)**: Use hash set to detect cycle. Time: O(log n), Space: O(log n).

5. **Two Sum**

   - **Description**: Find two numbers in an array that sum to a target.
   - **Solution 1 (Brute Force)**: Check all pairs. Time: O(n²), Space: O(1).
   - **Solution 2 (Hashing)**: Use hash map to store complements. Time: O(n), Space: O(n).

6. **Isomorphic Strings**

   - **Description**: Check if two strings are isomorphic (one-to-one mapping).
   - **Solution 1 (Brute Force)**: Check each character mapping. Time: O(n²), Space: O(1).
   - **Solution 2 (Hashing)**: Use two hash maps for bidirectional mapping. Time: O(n), Space: O(1).

7. **First Unique Character in a String**

   - **Description**: Find index of first non-repeating character.
   - **Solution 1 (Brute Force)**: Count frequency for each character. Time: O(n²), Space: O(1).
   - **Solution 2 (Hashing)**: Use hash map for frequency, then find first unique. Time: O(n), Space: O(1).

8. **Group Anagrams**

   - **Description**: Group all anagrams in a list of strings.
   - **Solution 1 (Brute Force)**: Compare each pair for anagram. Time: O(n*k*log k), Space: O(1).
   - **Solution 2 (Hashing)**: Use sorted string or char count as key in hash map. Time: O(n*k*log k), Space: O(n\*k).

9. **Valid Anagram**

   - **Description**: Check if two strings are anagrams.
   - **Solution 1 (Brute Force)**: Sort both strings, compare. Time: O(n log n), Space: O(1).
   - **Solution 2 (Hashing)**: Use hash map for character counts. Time: O(n), Space: O(1).

10. **Ransom Note**
    - **Description**: Check if a ransom note can be constructed from a magazine.
    - **Solution 1 (Brute Force)**: Count characters manually. Time: O(n\*m), Space: O(1).
    - **Solution 2 (Hashing)**: Use hash map for magazine character counts. Time: O(n), Space: O(1).

### Medium Problems

11. **Subarray Sum Equals K**

    - **Description**: Count subarrays with sum equal to k.
    - **Solution 1 (Brute Force)**: Check all subarrays. Time: O(n²), Space: O(1).
    - **Solution 2 (Hashing)**: Use prefix sum with hash map. Time: O(n), Space: O(n).

12. **Longest Substring Without Repeating Characters**

    - **Description**: Find longest substring with all unique characters.
    - **Solution 1 (Brute Force)**: Check all substrings. Time: O(n³), Space: O(1).
    - **Solution 2 (Hashing)**: Use hash map with sliding window. Time: O(n), Space: O(1).

13. **Top K Frequent Elements**

    - **Description**: Find k most frequent elements in an array.
    - **Solution 1 (Brute Force)**: Count frequencies, sort. Time: O(n log n), Space: O(n).
    - **Solution 2 (Hashing)**: Use hash map and bucket sort. Time: O(n), Space: O(n).

14. **Longest Consecutive Sequence**

    - **Description**: Find longest sequence of consecutive numbers in array.
    - **Solution 1 (Brute Force)**: Sort array, find longest sequence. Time: O(n log n), Space: O(1).
    - **Solution 2 (Hashing)**: Use hash set to check consecutive numbers. Time: O(n), Space: O(n).

15. **Group Shifted Strings**

    - **Description**: Group strings that are shifted versions of each other.
    - **Solution 1 (Brute Force)**: Compare each pair. Time: O(n\*k), Space: O(1).
    - **Solution 2 (Hashing)**: Use shift pattern as hash key. Time: O(n*k), Space: O(n*k).

16. **Minimum Window Substring**

    - **Description**: Find smallest substring containing all characters of another string.
    - **Solution 1 (Brute Force)**: Check all substrings. Time: O(n³), Space: O(1).
    - **Solution 2 (Hashing)**: Use hash map with sliding window. Time: O(n), Space: O(1).

17. **Find All Anagrams in a String**

    - **Description**: Find all starting indices of anagrams of a pattern in a string.
    - **Solution 1 (Brute Force)**: Check each substring. Time: O(n\*m), Space: O(1).
    - **Solution 2 (Hashing)**: Use hash map with sliding window. Time: O(n), Space: O(1).

18. **LRU Cache**

    - **Description**: Implement a Least Recently Used cache.
    - **Solution 1 (Brute Force)**: Use array, shift on access. Time: O(n), Space: O(n).
    - **Solution 2 (Hashing)**: Use hash map with doubly linked list. Time: O(1), Space: O(n).

19. **Valid Sudoku**

    - **Description**: Check if a 9x9 Sudoku board is valid.
    - **Solution 1 (Brute Force)**: Check each row, column, box manually. Time: O(1), Space: O(1).
    - **Solution 2 (Hashing)**: Use hash sets for rows, columns, boxes. Time: O(1), Space: O(1).

20. **Copy List with Random Pointer**
    - **Description**: Copy a linked list with random pointers.
    - **Solution 1 (Brute Force)**: Create nodes, map random pointers. Time: O(n), Space: O(n).
    - **Solution 2 (Hashing)**: Use hash map to map old to new nodes. Time: O(n), Space: O(n).

### Difficult Problems

21. **Subarray Sums Divisible by K**

    - **Description**: Count subarrays with sum divisible by k.
    - **Solution 1 (Brute Force)**: Check all subarrays. Time: O(n²), Space: O(1).
    - **Solution 2 (Hashing)**: Use prefix sum modulo k with hash map. Time: O(n), Space: O(k).

22. **Longest Substring with At Most K Distinct Characters**

    - **Description**: Find longest substring with at most k distinct characters.
    - **Solution 1 (Brute Force)**: Check all substrings. Time: O(n²), Space: O(n).
    - **Solution 2 (Hashing)**: Use hash map with sliding window. Time: O(n), Space: O(k).

23. **Random Pick with Weight** - **Description**: Pick index based on weights with probability proportional to weight.
    nych - **Solution 1 (Brute Force)**: Generate random number, check ranges. Time: O(n), Space: O(1). - **Solution 2 (Hashing)**: Use prefix sum with binary search. Time: O(log n), Space: O(n).

24. **Insert Delete GetRandom O(1)**

    - **Description**: Implement data structure with O(1) insert, delete, and random access.
    - **Solution 1 (Brute Force)**: Use array with linear search. Time: O(n), Space: O(n).
    - **Solution 2 (Hashing)**: Use hash map with array for O(1) operations. Time: O(1), Space: O(n).

25. **Find Duplicate Subtrees**

    - **Description**: Find all duplicate subtrees in a binary tree.
    - **Solution 1 (Brute Force)**: Compare each subtree pair. Time: O(n²), Space: O(n).
    - **Solution 2 (Hashing)**: Serialize subtrees, use hash map. Time: O(n), Space: O(n).

26. **Line Reflection**

    - **Description**: Check if points can be reflected over a line parallel to y-axis.
    - **Solution 1 (Brute Force)**: Try all possible lines. Time: O(n²), Space: O(1).
    - **Solution 2 (Hashing)**: Use hash set to check reflected points. Time: O(n), Space: O(n).

27. **Maximum Frequency Stack**

    - **Description**: Implement a stack where pop returns most frequent element.
    - **Solution 1 (Brute Force)**: Track frequencies, find max each pop. Time: O(n), Space: O(n).
    - **Solution 2 (Hashing)**: Use hash map with frequency stacks. Time: O(1), Space: O(n).

28. **Brick Wall**

    - **Description**: Find minimum bricks crossed by a vertical line in a wall.
    - **Solution 1 (Brute Force)**: Check all possible lines. Time: O(n\*m), Space: O(1).
    - **Solution 2 (Hashing)**: Use hash map to count gaps. Time: O(n\*m), Space: O(m).

29. **Subarray with Equal 0s and 1s**

    - **Description**: Find longest subarray with equal 0s and 1s.
    - **Solution 1 (Brute Force)**: Check all subarrays. Time: O(n²), Space: O(1).
    - **Solution 2 (Hashing)**: Use prefix sum with hash map. Time: O(n), Space: O(n).

30. **Find K-diff Pairs in an Array**
    - **Description**: Find pairs with absolute difference k.
    - **Solution 1 (Brute Force)**: Check all pairs. Time: O(n²), Space: O(1).
    - **Solution 2 (Hashing)**: Use hash map to track numbers. Time: O(n), Space: O(n).

---

## BFS / DFS

- **Concept**: Graph traversal techniques. BFS (Breadth-First Search) explores level by level using a queue, ideal for shortest paths. DFS (Depth-First Search) explores as far as possible along a branch using recursion or a stack, suitable for connectivity or cycles.
- **Use Cases**: Shortest path in unweighted graphs (BFS), topological sorting (DFS).
- **Example**: Finding if a path exists in a maze.

### Easy Problems

1. **Binary Tree Level Order Traversal**

   - **Description**: Traverse a binary tree level by level.
   - **Solution 1 (BFS)**: Use queue to process nodes level by level. Time: O(n), Space: O(w).
   - **Solution 2 (DFS)**: Use recursion with level tracking. Time: O(n), Space: O(h).

2. **Symmetric Tree**

   - **Description**: Check if a binary tree is mirror symmetric.
   - **Solution 1 (BFS)**: Use queue to compare left and right subtrees. Time: O(n), Space: O(w).
   - **Solution 2 (DFS)**: Recursively compare left and right subtrees. Time: O(n), Space: O(h).

3. **Minimum Depth of Binary Tree**

   - **Description**: Find minimum depth of a binary tree.
   - **Solution 1 (BFS)**: Use queue, return depth of first leaf. Time: O(n), Space: O(w).
   - **Solution 2 (DFS)**: Recursively find min depth of subtrees. Time: O(n), Space: O(h).

4. **Flood Fill**

   - **Description**: Fill a connected region in a 2D grid with a new color.
   - **Solution 1 (BFS)**: Use queue to explore neighbors. Time: O(m*n), Space: O(m*n).
   - **Solution 2 (DFS)**: Recursively fill neighbors. Time: O(m*n), Space: O(m*n).

5. **Same Tree**

   - **Description**: Check if two binary trees are identical.
   - **Solution 1 (BFS)**: Use queue to compare nodes level by level. Time: O(n), Space: O(w).
   - **Solution 2 (DFS)**: Recursively compare nodes. Time: O(n), Space: O(h).

6. **Invert Binary Tree**

   - **Description**: Invert a binary tree (swap left and right children).
   - **Solution 1 (BFS)**: Use queue to swap children level by level. Time: O(n), Space: O(w).
   - **Solution 2 (DFS)**: Recursively swap children. Time: O(n), Space: O(h).

7. **Number of Islands**

   - **Description**: Count number of islands (connected 1s) in a 2D grid.
   - **Solution 1 (BFS)**: Use queue to explore each island. Time: O(m*n), Space: O(m*n).
   - **Solution 2 (DFS)**: Recursively mark connected 1s. Time: O(m*n), Space: O(m*n).

8. **Binary Tree Zigzag Level Order Traversal**

   - **Description**: Traverse binary tree in zigzag order.
   - **Solution 1 (BFS)**: Use queue with direction flag. Time: O(n), Space: O(w).
   - **Solution 2 (DFS)**: Use recursion with level tracking, reverse alternate levels. Time: O(n), Space: O(h).

9. **Path Sum**

   - **Description**: Check if a binary tree has a path with given sum.
   - **Solution 1 (BFS)**: Use queue with running sum. Time: O(n), Space: O(w).
   - **Solution 2 (DFS)**: Recursively subtract node values. Time: O(n), Space: O(h).

10. **Connected Components in Undirected Graph**
    - **Description**: Count connected components in an undirected graph.
    - **Solution 1 (BFS)**: Use queue to explore each component. Time: O(V+E), Space: O(V).
    - **Solution 2 (DFS)**: Recursively explore each component. Time: O(V+E), Space: O(V).

### Medium Problems

11. **Word Ladder**

    - **Description**: Find shortest transformation sequence from start to end word.
    - **Solution 1 (BFS)**: Use queue to find shortest path. Time: O(n\*26^l), Space: O(n).
    - **Solution 2 (DFS)**: Use recursion (less efficient). Time: O(26^l), Space: O(l).

12. **Clone Graph**

    - **Description**: Clone an undirected graph.
    - **Solution 1 (BFS)**: Use queue to copy nodes and edges. Time: O(V+E), Space: O(V).
    - **Solution 2 (DFS)**: Recursively copy nodes and edges. Time: O(V+E), Space: O(V).

13. **Course Schedule**

    - **Description**: Check if courses can be finished based on prerequisites.
    - **Solution 1 (BFS)**: Use topological sort with queue. Time: O(V+E), Space: O(V).
    - **Solution 2 (DFS)**: Use recursion to detect cycles. Time: O(V+E), Space: O(V).

14. **Rotting Oranges**

    - **Description**: Find minimum time to rot all fresh oranges in a grid.
    - **Solution 1 (BFS)**: Use queue to simulate rotting process. Time: O(m*n), Space: O(m*n).
    - **Solution 2 (DFS)**: Recursively explore (less efficient). Time: O(m*n), Space: O(m*n).

15. **Pacific Atlantic Water Flow**

    - **Description**: Find cells where water can flow to both oceans.
    - **Solution 1 (BFS)**: Use queue from borders to mark reachable cells. Time: O(m*n), Space: O(m*n).
    - **Solution 2 (DFS)**: Recursively mark reachable cells. Time: O(m*n), Space: O(m*n).

16. **Shortest Path in Binary Matrix**

    - **Description**: Find shortest path from top-left to bottom-right in binary matrix.
    - **Solution 1 (BFS)**: Use queue for shortest path. Time: O(m*n), Space: O(m*n).
    - **Solution 2 (DFS)**: Recursively explore (less efficient). Time: O(2^(m*n)), Space: O(m*n).

17. **Kth Smallest Element in a BST**

    - **Description**: Find kth smallest element in a binary search tree.
    - **Solution 1 (BFS)**: Use level-order with sorting (less efficient). Time: O(n log n), Space: O(n).
    - **Solution 2 (DFS)**: Use inorder traversal with counter. Time: O(n), Space: O(h).

18. **Walls and Gates**

    - **Description**: Fill each empty room with distance to nearest gate in a grid.
    - **Solution 1 (BFS)**: Use queue from gates to fill distances. Time: O(m*n), Space: O(m*n).
    - **Solution 2 (DFS)**: Recursively fill distances (less efficient). Time: O(m*n), Space: O(m*n).

19. **Surrounded Regions**

    - **Description**: Mark surrounded 'O' regions as 'X' in a 2D board.
    - **Solution 1 (BFS)**: Use queue to mark boundary-connected 'O's. Time: O(m*n), Space: O(m*n).
    - **Solution 2 (DFS)**: Recursively mark boundary-connected 'O's. Time: O(m*n), Space: O(m*n).

20. **Binary Tree Right Side View**
    - **Description**: Return rightmost node at each level of a binary tree.
    - **Solution 1 (BFS)**: Use queue, take last node per level. Time: O(n), Space: O(w).
    - **Solution 2 (DFS)**: Recursively traverse right-first. Time: O(n), Space: O(h).

### Difficult Problems

21. **Word Ladder II**

    - **Description**: Find all shortest transformation sequences from start to end word.
    - **Solution 1 (BFS)**: Use queue to build paths. Time: O(n*26^l), Space: O(n*26^l).
    - **Solution 2 (DFS)**: Use BFS to find distance, DFS to build paths. Time: O(n*26^l), Space: O(n*26^l).

22. **Shortest Path in a Grid with Obstacles Elimination**

    - **Description**: Find shortest path with at most k obstacle eliminations.
    - **Solution 1 (BFS)**: Use queue with state (row, col, k). Time: O(m*n*k), Space: O(m*n*k).
    - **Solution 2 (DFS)**: Recursively explore with pruning (less efficient). Time: O(m*n*k), Space: O(m*n*k).

23. **Minimum Knight Moves**

    - **Description**: Find minimum moves for a knight to reach target on infinite board.
    - **Solution 1 (BFS)**: Use queue to find shortest path. Time: O(max(x,y)^2), Space: O(max(x,y)^2).
    - **Solution 2 (DFS)**: Recursively explore (less efficient). Time: O(8^max(x,y)), Space: O(max(x,y)).

24. **Course Schedule II**

    - **Description**: Find order of courses based on prerequisites.
    - **Solution 1 (BFS)**: Use topological sort with queue. Time: O(V+E), Space: O(V).
    - **Solution 2 (DFS)**: Use recursion to build order, detect cycles. Time: O(V+E), Space: O(V).

25. **Alien Dictionary**

    - **Description**: Find order of characters based on sorted words.
    - **Solution 1 (BFS)**: Build graph, use topological sort. Time: O(C), Space: O(C).
    - **Solution 2 (DFS)**: Use recursion to detect cycles, build order. Time: O(C), Space: O(C).

26. **Reconstruct Itinerary**

    - **Description**: Find Eulerian path in a graph of flights.
    - **Solution 1 (BFS)**: Use queue (less efficient). Time: O(E!), Space: O(E).
    - **Solution 2 (DFS)**: Use Hierholzer’s algorithm with recursion. Time: O(E), Space: O(E).

27. **Longest Increasing Path in a Matrix**

    - **Description**: Find longest increasing path in a matrix.
    - **Solution 1 (BFS)**: Use queue for each cell (less efficient). Time: O(m*n), Space: O(m*n).
    - **Solution 2 (DFS)**: Use DFS with memoization. Time: O(m*n), Space: O(m*n).

28. **Cheapest Flights Within K Stops**

    - **Description**: Find cheapest flight within k stops.
    - **Solution 1 (BFS)**: Use queue with stop count. Time: O(E*k), Space: O(V*k).
    - **Solution 2 (DFS)**: Use recursion with pruning (less efficient). Time: O(V^k), Space: O(V).

29. **Minimum Genetic Mutation**

    - **Description**: Find minimum mutations to transform start to end gene.
    - **Solution 1 (BFS)**: Use queue to find shortest path. Time: O(n\*4^l), Space: O(n).
    - **Solution 2 (DFS)**: Use recursion (less efficient). Time: O(4^l), Space: O(l).

30. **Sliding Puzzle**
    - **Description**: Find minimum moves to solve a 2x3 sliding puzzle.
    - **Solution 1 (BFS)**: Use queue to explore states. Time: O(6!), Space: O(6!).
    - **Solution 2 (DFS)**: Use recursion (less efficient). Time: O(6!), Space: O(6!).

---

## Binary Search

- **Concept**: Efficiently searches a sorted array by dividing the search space in half each step, achieving O(log n) time.
- **Use Cases**: Finding an element, searching for boundaries, or optimizing answers.
- **Example**: Finding the square root of a number.

### Easy Problems

1. **Binary Search**

   - **Description**: Find an element in a sorted array.
   - **Solution 1 (Brute Force)**: Linear search. Time: O(n), Space: O(1).
   - **Solution 2 (Binary Search)**: Divide search space in half. Time: O(log n), Space: O(1).

2. **Sqrt(x)**

   - **Description**: Compute integer square root of a number.
   - **Solution 1 (Brute Force)**: Check numbers up to x. Time: O(sqrt(x)), Space: O(1).
   - **Solution 2 (Binary Search)**: Search for square root in range [1, x]. Time: O(log x), Space: O(1).

3. **Guess Number Higher or Lower**

   - **Description**: Guess a number in range [1, n] with feedback.
   - **Solution 1 (Brute Force)**: Try each number. Time: O(n), Space: O(1).
   - **Solution 2 (Binary Search)**: Use feedback to narrow range. Time: O(log n), Space: O(1).

4. **First Bad Version**

   - **Description**: Find first version that is bad in a sequence.
   - **Solution 1 (Brute Force)**: Check each version. Time: O(n), Space: O(1).
   - **Solution 2 (Binary Search)**: Search for first bad version. Time: O(log n), Space: O(1).

5. **Search Insert Position**

   - **Description**: Find position to insert a target in a sorted array.
   - **Solution 1 (Brute Force)**: Linear search for position. Time: O(n), Space: O(1).
   - **Solution 2 (Binary Search)**: Find correct position. Time: O(log n), Space: O(1).

6. **Peak Element**

   - **Description**: Find a peak element in an array (greater than neighbors).
   - **Solution 1 (Brute Force)**: Check each element. Time: O(n), Space: O(1).
   - **Solution 2 (Binary Search)**: Use binary search to find peak. Time: O(log n), Space: O(1).

7. **Find Smallest Letter Greater Than Target**

   - **Description**: Find smallest letter in sorted array greater than target.
   - **Solution 1 (Brute Force)**: Linear search. Time: O(n), Space: O(1).
   - **Solution 2 (Binary Search)**: Search for smallest greater letter. Time: O(log n), Space: O(1).

8. **Arranging Coins**

   - **Description**: Find number of complete rows in a staircase of n coins.
   - **Solution 1 (Brute Force)**: Simulate row by row. Time: O(sqrt(n)), Space: O(1).
   - **Solution 2 (Binary Search)**: Search for number of rows. Time: O(log n), Space: O(1).

9. **Valid Perfect Square**

   - **Description**: Check if a number is a perfect square.
   - **Solution 1 (Brute Force)**: Check numbers up to sqrt(n). Time: O(sqrt(n)), Space: O(1).
   - **Solution 2 (Binary Search)**: Search for square root. Time: O(log n), Space: O(1).

10. **Find Minimum in Rotated Sorted Array**
    - **Description**: Find minimum element in a rotated sorted array.
    - **Solution 1 (Brute Force)**: Linear search for minimum. Time: O(n), Space: O(1).
    - **Solution 2 (Binary Search)**: Find pivot point. Time: O(log n), Space: O(1).

### Medium Problems

11. **Search in Rotated Sorted Array**

    - **Description**: Search for a target in a rotated sorted array.
    - **Solution 1 (Brute Force)**: Linear search. Time: O(n), Space: O(1).
    - **Solution 2 (Binary Search)**: Adjust binary search for rotation. Time: O(log n), Space: O(1).

12. **Find First and Last Position of Element**

    - **Description**: Find first and last occurrence of a target in a sorted array.
    - **Solution 1 (Brute Force)**: Linear search for boundaries. Time: O(n), Space: O(1).
    - **Solution 2 (Binary Search)**: Use binary search twice for first and last. Time: O(log n), Space: O(1).

13. **Search a 2D Matrix**

    - **Description**: Search for a target in a sorted 2D matrix.
    - **Solution 1 (Brute Force)**: Check each element. Time: O(m\*n), Space: O(1).
    - **Solution 2 (Binary Search)**: Treat matrix as sorted array. Time: O(log(m\*n)), Space: O(1).

14. **Kth Smallest Element in a Sorted Matrix**

    - **Description**: Find kth smallest element in a sorted matrix.
    - **Solution 1 (Brute Force)**: Flatten matrix, sort. Time: O(m*n*log(m*n)), Space: O(m*n).
    - **Solution 2 (Binary Search)**: Search value range, count elements. Time: O(m*log(m*n)), Space: O(1).

15. **Find Peak Element**

    - **Description**: Find a peak element in an array with multiple peaks.
    - **Solution 1 (Brute Force)**: Check each element. Time: O(n), Space: O(1).
    - **Solution 2 (Binary Search)**: Use binary search for any peak. Time: O(log n), Space: O(1).

16. **Search in Rotated Sorted Array II**

    - **Description**: Search in rotated sorted array with duplicates.
    - **Solution 1 (Brute Force)**: Linear search. Time: O(n), Space: O(1).
    - **Solution 2 (Binary Search)**: Handle duplicates in binary search. Time: O(n) worst case, Space: O(1).

17. **Divide Two Integers**

    - **Description**: Divide two integers without using multiplication or division.
    - **Solution 1 (Brute Force)**: Repeated subtraction. Time: O(n), Space: O(1).
    - **Solution 2 (Binary Search)**: Use bit shifting and binary search. Time: O(log n), Space: O(1).

18. **Capacity To Ship Packages Within D Days**

    - **Description**: Find minimum capacity to ship packages in D days.
    - **Solution 1 (Brute Force)**: Try all capacities. Time: O(n\*max_weight), Space: O(1).
    - **Solution 2 (Binary Search)**: Search capacity range. Time: O(n\*log(sum)), Space: O(1).

19. **Find the Duplicate Number**

    - **Description**: Find duplicate in array with numbers [1, n].
    - **Solution 1 (Brute Force)**: Use hash set. Time: O(n), Space: O(n).
    - **Solution 2 (Binary Search)**: Search count of numbers <= mid. Time: O(n\*log n), Space: O(1).

20. **Koko Eating Bananas**
    - **Description**: Find minimum eating speed to eat all bananas in h hours.
    - **Solution 1 (Brute Force)**: Try each speed. Time: O(n\*max_pile), Space: O(1).
    - **Solution 2 (Binary Search)**: Search speed range. Time: O(n\*log(max_pile)), Space: O(1).

### Difficult Problems

21. **Median of Two Sorted Arrays**

    - **Description**: Find median of two sorted arrays of different sizes.
    - **Solution 1 (Brute Force)**: Merge arrays, find median. Time: O(m+n), Space: O(m+n).
    - **Solution 2 (Binary Search)**: Partition arrays to find median. Time: O(log(min(m,n))), Space: O(1).

22. **Regular Expression Matching**

    - **Description**: Check if a string matches a regex pattern.
    - **Solution 1 (Brute Force)**: Try all possibilities. Time: O(2^(m+n)), Space: O(m+n).
    - **Solution 2 (Binary Search)**: Use DP with binary search (less common). Time: O(m*n), Space: O(m*n).

23. **Find K-th Smallest Pair Distance**

    - **Description**: Find kth smallest absolute difference between pairs.
    - **Solution 1 (Brute Force)**: Compute all differences, sort. Time: O(n²\*log n), Space: O(n²).
    - **Solution 2 (Binary Search)**: Search difference range, count pairs. Time: O(n\*log W), Space: O(1).

24. **Split Array Largest Sum** - **Description**: Split array into m subarrays, minimize largest sum. - **Solution 1 (Brute Force)**: Try all splits. Time: O(n^m), Space: O(n).
    եղ - **Solution 2 (Binary Search)**: Search sum range. Time: O(n\*log(sum)), Space: O(1).

25. **Minimum Window Substring**

    - **Description**: Find smallest substring containing all characters of another string.
    - **Solution 1 (Brute Force)**: Check all substrings. Time: O(n³), Space: O(1).
    - **Solution 2 (Binary Search)**: Use sliding window with binary search (less common). Time: O(n), Space: O(1).

26. **Swim in Rising Water**

    - **Description**: Find minimum time to reach bottom-right in grid with rising water.
    - **Solution 1 (Brute Force)**: Try all paths. Time: O(2^(m*n)), Space: O(m*n).
    - **Solution 2 (Binary Search)**: Search time range with BFS/DFS. Time: O(m*n*log(max)), Space: O(m\*n).

27. **Find Minimum in Rotated Sorted Array II**

    - **Description**: Find minimum in rotated sorted array with duplicates.
    - **Solution 1 (Brute Force)**: Linear search. Time: O(n), Space: O(1).
    - **Solution 2 (Binary Search)**: Handle duplicates in binary search. Time: O(n) worst case, Space: O(1).

28. **Kth Smallest Number in Multiplication Table**

    - **Description**: Find kth smallest number in a multiplication table.
    - **Solution 1 (Brute Force)**: Generate all products, sort. Time: O(m*n*log(m*n)), Space: O(m*n).
    - **Solution 2 (Binary Search)**: Search value range, count products. Time: O(m*log(m*n)), Space: O(1).

29. **Random Pick with Blacklist**

    - **Description**: Pick random number not in blacklist.
    - **Solution 1 (Brute Force)**: Generate random, check blacklist. Time: O(n), Space: O(n).
    - **Solution 2 (Binary Search)**: Use mapping with binary search. Time: O(log n), Space: O(n).

30. **Minimize Max Distance to Gas Station**
    - **Description**: Minimize max distance between gas stations by adding k stations.
    - **Solution 1 (Brute Force)**: Try all positions. Time: O(n\*k), Space: O(n).
    - **Solution 2 (Binary Search)**: Search max distance range. Time: O(n\*log W), Space: O(n).

---

## Greedy Algorithms

- **Concept**: Makes the locally optimal choice at each step, hoping to find a global optimum. Works when local decisions lead to global solutions.
- **Use Cases**: Activity selection, fractional knapsack, or minimum spanning trees.
- **Example**: Selecting maximum non-overlapping intervals.

### Easy Problems

1. **Assign Cookies**

   - **Description**: Assign cookies to children based on greed factor.
   - **Solution 1 (Brute Force)**: Try all assignments. Time: O(n\*m), Space: O(1).
   - **Solution 2 (Greedy)**: Sort children and cookies, assign greedily. Time: O(n log n), Space: O(1).

2. **Lemonade Change**

   - **Description**: Check if lemonade stand can provide change for bills.
   - **Solution 1 (Brute Force)**: Simulate each transaction. Time: O(n), Space: O(1).
   - **Solution 2 (Greedy)**: Track $5 and $10 bills greedily. Time: O(n), Space: O(1).

3. **Is Subsequence**
   - **Description**: Check if one string is a subsequence of another.
   - **Solution 1 (Brute Force)**:
