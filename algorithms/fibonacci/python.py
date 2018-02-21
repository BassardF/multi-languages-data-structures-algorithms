# Fast doubling : O(1) space, O(log n) operations

def fibonacci(n):
	if n < 0:
		raise ValueError("Positive values only")
	return _fib(n)[0]

def _fib(n):
	if n == 0:
		return (0, 1)
	else:
		a, b = _fib(n // 2)
		c = a * (b * 2 - a)
		d = a * a + b * b
		if n % 2 == 0:
			return (c, d)
		else:
			return (d, c + d)
