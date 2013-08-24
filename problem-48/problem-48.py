import math

soma = 0

for n in xrange(1, 1000):
	print n
	soma += math.pow(n, n)

print soma
