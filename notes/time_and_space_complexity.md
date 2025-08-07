# Time and Space Complexity

## What is Time Complexity?

**Time Complexity** is a measure of the amount of time an algorithm takes to complete as a function of the length of the input.

### Common Time Complexities

| Notation   | Description       | Example                      |
| ---------- | ----------------- | ---------------------------- |
| O(1)       | Constant time     | Accessing an array element   |
| O(log n)   | Logarithmic time  | Binary Search                |
| O(n)       | Linear time       | Loop through array           |
| O(n log n) | Linearithmic time | Merge Sort, Quick Sort (avg) |
| O(n^2)     | Quadratic time    | Nested loops, Bubble Sort    |
| O(2^n)     | Exponential time  | Recursive Fibonacci          |
| O(n!)      | Factorial time    | Solving TSP brute-force      |

## What is Space Complexity?

**Space Complexity** is the amount of memory space an algorithm uses in terms of input size.

### Common Space Complexities

| Notation | Description     | Example       |
| -------- | --------------- | ------------- |
| O(1)     | Constant space  | Variable swap |
| O(n)     | Linear space    | Array storage |
| O(n^2)   | Quadratic space | 2D array      |

## Why Analyze Time & Space Complexity?

- Helps to determine **scalability** of a solution.
- Helps pick the **best approach** for large input sizes.
- Impacts the **performance** and **memory usage**.

## Example: Linear Search

```ts
function linearSearch(arr: number[], target: number): number {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) return i;
  }
  return -1;
}
```

- Time Complexity: **O(n)** (worst case: element not found)
- Space Complexity: **O(1)** (no extra space used)

## Example: Merge Sort

```ts
function mergeSort(arr: number[]): number[] {
  if (arr.length <= 1) return arr;
  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));
  return merge(left, right);
}
```

- Time Complexity: **O(n log n)**
- Space Complexity: **O(n)** (due to creating new arrays)

---

# 📊 Time Complexity Explained with Formulas & Examples

## 📌 What is Time Complexity?

Time complexity describes how the **execution time** of an algorithm changes with the **size of the input** (`n`). It helps us understand the **scalability** of our code.

---

## 🧮 Time Complexity Table

| Complexity   | Name         | Example                       | Meaning                                                                              |
| ------------ | ------------ | ----------------------------- | ------------------------------------------------------------------------------------ |
| `O(1)`       | Constant     | Accessing an array index      | No matter how large the input, the operation takes **same time**.                    |
| `O(log n)`   | Logarithmic  | Binary search                 | Operations **cut the input size in half** each time.                                 |
| `O(n)`       | Linear       | Loop through array            | Operations increase **linearly with input size**.                                    |
| `O(n log n)` | Linearithmic | Merge sort, quicksort (avg)   | Faster than `O(n²)` but slower than `O(n)` — combines linear and logarithmic growth. |
| `O(n²)`      | Quadratic    | Bubble sort, nested loops     | Performance degrades **rapidly** as input grows.                                     |
| `O(2ⁿ)`      | Exponential  | Naive Fibonacci               | Operations **double with each step**. Very inefficient for large `n`.                |
| `O(n!)`      | Factorial    | Permutations, TSP brute-force | Operations **explode** with each added element — **extremely slow**.                 |

---

## 🧠 Big-O Complexity Formulas

### 🔸 `O(1)` – Constant Time

**Example:**

```js
const arr = [1, 2, 3];
console.log(arr[0]);
```

**Formula Explanation:**  
Only **1 step**, regardless of input size.  
➡ `T(n) = 1`

---

### 🔸 `O(log n)` – Logarithmic Time

**Example: Binary Search**

```js
function binarySearch(arr, target) {
  let start = 0,
    end = arr.length - 1;
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (arr[mid] === target) return mid;
    else if (arr[mid] < target) start = mid + 1;
    else end = mid - 1;
  }
  return -1;
}
```

**Formula Explanation:**  
Input is **halved** each time.  
➡ `T(n) = log₂(n)`

---

### 🔸 `O(n)` – Linear Time

**Example:**

```js
function printAll(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}
```

**Formula Explanation:**  
One operation per element.  
➡ `T(n) = n`

---

### 🔸 `O(n log n)` – Linearithmic Time

**Example: Merge Sort**

```js
function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));
  return merge(left, right);
}
```

**Formula Explanation:**  
Breaks into halves (`log n`) and merges (`n`).  
➡ `T(n) = n log n`

---

### 🔸 `O(n²)` – Quadratic Time

**Example:**

```js
function printPairs(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      console.log(arr[i], arr[j]);
    }
  }
}
```

**Formula Explanation:**  
Each element compared with every other.  
➡ `T(n) = n × n = n²`

---

### 🔸 `O(2ⁿ)` – Exponential Time

**Example: Naive Fibonacci**

```js
function fib(n) {
  if (n <= 1) return n;
  return fib(n - 1) + fib(n - 2);
}
```

**Formula Explanation:**  
Each call makes 2 new calls.  
➡ `T(n) = 2ⁿ`

---

### 🔸 `O(n!)` – Factorial Time

**Example: Brute-force Permutations**

```js
function permute(str) {
  if (str.length <= 1) return [str];
  let result = [];
  for (let i = 0; i < str.length; i++) {
    let remaining = str.slice(0, i) + str.slice(i + 1);
    for (let perm of permute(remaining)) {
      result.push(str[i] + perm);
    }
  }
  return result;
}
```

**Formula Explanation:**  
Every element creates multiple paths.  
➡ `T(n) = n!`

---

## 📚 Summary Table

| Complexity   | Growth Rate         | Real-World Example        |
| ------------ | ------------------- | ------------------------- |
| `O(1)`       | Constant            | Array access              |
| `O(log n)`   | Slow growth         | Binary search             |
| `O(n)`       | Linear              | Loop through array        |
| `O(n log n)` | Moderate            | Merge sort, quick sort    |
| `O(n²)`      | Fast                | Nested loop, bubble sort  |
| `O(2ⁿ)`      | Very fast           | Naive recursive Fibonacci |
| `O(n!)`      | Extremely explosive | Brute-force permutations  |

---

## Tips

- Avoid nested loops to reduce time complexity.
- Reuse variables or use iterative methods to reduce space complexity.
- Use appropriate data structures (Set, Map, Heap) for optimized performance.

## Additional Resources

- [Big-O Cheat Sheet](https://www.bigocheatsheet.com/)
- [VisuAlgo - Complexity Visualizations](https://visualgo.net/en)
