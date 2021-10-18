import math

sides = [ int(x) for x in input().split() ]

s = sum(sides)/2

print(math.sqrt((s - sides[0]) * (s - sides[1]) * (s - sides[2]) * (s - sides[3])))