def removeLoop(grid, row, col):
    grid[row][col] = '@'

    for i, j in [(-1, 1), (0, 1), (1, 1), (1, 0), (1, -1), (0, -1), (-1, -1), (-1, 0)]:
        try:
            if row + i < 0 or col + j < 0:
                continue

            if grid[row + i][col + j] == '#':
                removeLoop(grid, row + i, col + j)
                break
        except IndexError:
            continue
    else:
        return


[ m, n ] = [ int(x) for x in input().split() ]

grid = []

for i in range(m):
    grid.append(list(input()))

loopCount = 0

for i in range(m):
    for j in range(n):
        if grid[i][j] == '#':
            removeLoop(grid, i, j)
            loopCount += 1

print(loopCount)