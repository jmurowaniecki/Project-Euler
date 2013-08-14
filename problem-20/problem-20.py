
class FactorialSum:
	def __init__(self, number):
		numsum = 0
		number = str(self.factorial(number))
		print number
		for n in number:
			numsum += int(n)
		self.nsum = numsum

		print numsum

	def factorial(self, n):
		if n > 1:
			return n * self.factorial(n - 1)
		return n 

teste = FactorialSum(100)
print teste.nsum
