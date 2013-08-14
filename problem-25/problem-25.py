import math

def Fibonacci(old, new):

	print old 
	if new < 10:
		return old + Fibonacci(new, new + old)
	return new

print Fibonacci(0, 1)
