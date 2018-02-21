import Data.List
import System.IO

-- Textbook recursive : O(goldenNumber**n) operations
tbFib 0 = 0
tbFib 1 = 1
tbFib n = tbFib (n-1) + tbFib (n-2)

-- Inline zipWith : Likely O(n**2) operations

zFibs = 1 : 1 : zipWith (+) fibs (tail fibs)

-- Fast doubling : O(1) space, O(log n) operations

fibonacci :: Integer -> Integer
fibonacci n | n >= 0 = fst (fib n)

fib :: Integer -> (Integer, Integer)
fib 0 = (0, 1)
fib n =
	let (a, b) = fib (div n 2)
	    c = a * (b * 2 - a)
	    d = a * a + b * b
	in if mod n 2 == 0
		then (c, d)
		else (d, c + d)
