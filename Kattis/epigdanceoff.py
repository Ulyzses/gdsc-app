[rows, cols] = [ int(x) for x in input().split() ]

dance = [None] * rows

for i in range(rows):
    dance[i] = input()

count = 0

for i in range(cols):
    for j in range(rows):
        if dance[j][i] == '$':
            break
    else:
        count += 1

count += 1

print(count)