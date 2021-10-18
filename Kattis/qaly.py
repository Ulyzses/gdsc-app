count = int(input())

qaly = 0

for i in range(count):
    inp = input().split()
    qol = float(inp[0])
    years = float(inp[1])

    qaly += qol * years

print(qaly)