# Q1. Given a number n, check whether it is even or odd. Return true for even and false for odd.
# Q1Example 1
def isOddorEven(n):
    n = int(n)
    if(n % 2 == 0):
        return "Even"
    else: 
        return "Odd"
    
# Q1Example 2: bit wise operation
def isOddOrEvenBitWiseOp(n):
    n = int(n)
    if(n & 1 == 1):
        return "Odd"
    else:
        return "Even"
# Q1Example 3: bit wise shift operation
def isOddorEvenBitwiseShift(n):
    n = int(n)
    if n == (n >> 1 )<< 1: 
        return "Even"
    else:
        return "Odd"
    
#Q2. Program to print multiplication table of a number
#Q2Example 1: iterative
def multiplicationTable(n):
    n = int(n)
    for i in range(1, 11):
        print(f"{n} * {i} = {n * i}")

#Q2Example 2: Recursive
def multiplicationTableRec(n, i = 1):
    n = int(n)
    if i > 10:
        return
    else:
        print(f"{n} * {i} = {n * i}")
        multiplicationTableRec(n, i+1)

#Q3. Program to find sum of first n natural numbers. n(n+1)/2
#Q3Example 1: formula
def sumOfNnaturalNos(n):
    n = int(n)
    return (n * (n+1))/2

#Q3Example 2: Iterative
def sumOfNnaturalNosItr(n):
    n = int(n)
    sum = 0
    x = 0
    while x <= n:
        sum = sum + x
        x = x + 1
    return sum

#Q3Example 3: Recursive
def sumOfNnaturalNosRec(n, x = 0, sum = 0):
    n = int(n)
    if x > n:
        return sum
    return sumOfNnaturalNosRec(n, x + 1, sum + x)


#Q4. Swap two numbers

#Q4Example 1: using 3rd variable
def swapTwoNos(a, b):
    temp = a
    a = b
    b = temp
    return a, b

#Q4Example 2: using destructuring 
def swapTwoNosDest(a,b):
    [a,b] = [b, a]
    return a, b

#Q4Example 3: without using 3rd variable - arithmetic operator
def swapTwoNosArith(a, b):
    a = a + b
    b = a - b
    a = a - b
    return a, b

#Q4Example 4: without using 3rd variable - bitwise xor(^) operator
def swapTwoNosBitwise(a, b):
    a = a ^ b
    b = a ^ b
    a = a ^ b
    return a, b


#Q5. Find the number closest to n and divisible by m - n = 13, m =4 then closest no is 12

#Q5Example 1:
def closestNo(n, m):
    if m == 0 :
        return "m is integer 0 not acceptable."
    else:
        q = n/m
         # 1st possible closest number
        n1 = q * m

        # 2nd possible closest number
        if ((m * n) > 0 ):
            n2 = (m * (q + 1))
        else:
            n2 = (m * (q - 1))

        # if true, then n1 is the required closest number
        if(abs(n - n1) < abs(n - n2)):
            return n1
        return n2


if __name__ == "__main__":

    import sys

    if len(sys.argv) > 1:
        funcName = sys.argv[1]
        arrgs = sys.argv[2:]

        intFuncs = ["isOddorEven", "isOddOrEvenBitWiseOp", "isOddorEvenBitwiseShift", 
        "multiplicationTable", "multiplicationTableRec", "sumOfNnaturalNos", "sumOfNnaturalNosItr", 
        "sumOfNnaturalNosRec", "swapTwoNos", "swapTwoNosDest", "swapTwoNosArith", "swapTwoNosBitwise", 
        "closestNo"]

        try:
            if funcName in globals():
                if funcName in intFuncs:
                    arrgs = [int(arg) for arg in arrgs]
                else:
                    arrgs = [arg for arg in arrgs]
                
                result = globals()[funcName](*arrgs)
                print(f"Result: {result}")
            else:
                print(f"Function {funcName} not found")
        except Exception as e:
            print(f"Error: {e} at function {funcName}")
    else:
        print("Please Provide the function name")