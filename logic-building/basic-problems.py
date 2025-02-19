# Q1. Given a number n, check whether it is even or odd. Return true for even and false for odd.
# Example 1
def isOddorEven(n):
    n = int(n)
    if(n % 2 == 0):
        return "Even"
    else: 
        return "Odd"
    
# Example 2: bit wise operation
def isOddOrEvenBitWiseOp(n):
    n = int(n)
    if(n & 1 == 1):
        return "Odd"
    else:
        return "Even"
# Example 3: bit wise shift operation
def isOddorEvenBitwiseShift(n):
    n = int(n)
    if n == (n >> 1 )<< 1: 
        return "Even"
    else:
        return "Odd"
    
#Q2. Program to print multiplication table of a number
#Example 1: iterative
def multiplicationTable(n):
    n = int(n)
    for i in range(1, 11):
        print(f"{n} * {i} = {n * i}")

#Example 2: Recursive
def multiplicationTableRec(n, i = 1):
    n = int(n)
    if i > 10:
        return
    else:
        print(f"{n} * {i} = {n * i}")
        multiplicationTableRec(n, i+1)

#Q3. Program to find sum of first n natural numbers. n(n+1)/2
#Example 1: formula
def sumOfNnaturalNos(n):
    n = int(n)
    return (n * (n+1))/2

#Example 2: Iterative
def sumOfNnaturalNosItr(n):
    n = int(n)
    sum = 0
    x = 0
    while x <= n:
        sum = sum + x
        x = x + 1
    return sum

#Example 3: Recursive
def sumOfNnaturalNosRec(n, x = 0, sum = 0):
    n = int(n)
    if x > n:
        return sum
    return sumOfNnaturalNosRec(n, x + 1, sum + x)

if __name__ == "__main__":

    import sys

    if len(sys.argv) > 1:
        funcName = sys.argv[1]
        arrgs = sys.argv[2:]

        intFuncs = ["isOddorEven", "isOddOrEvenBitWiseOp", "isOddorEvenBitwiseShift", 
        "multiplicationTable", "multiplicationTableRec", "sumOfNnaturalNos", "sumOfNnaturalNosItr", "sumOfNnaturalNosRec"]

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