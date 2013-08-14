import math

num = str(int(math.pow(2, 1000)))
val = 0

for n in num:
	val += int(n)
	print(n)
print(val)
