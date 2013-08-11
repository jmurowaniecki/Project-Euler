n = 1000000
biggestchain = 0
elementschain = 0

while n > 0:

	chain = n
	elements = 0

	while chain > 1:
		if chain & 1:
			chain = 3 * chain + 1
		else:
			chain = chain / 2
		elements += 1
	
	if elements > elementschain:
		elementschain = elements
		biggestchain = n
		print "Biggest chain productor is %d with %d elements. " % (n, elements)

	n -= 1
