import math

def totalsum(num, mul):
	number = math.floor(num / 10 * mul)
	if number > 1:
		print "numero %d multiplicador %d" % (number, mul)
		return totalsum(num, mul + 1)
	return 0

totalsum(math.pow(2, 10), 1)
