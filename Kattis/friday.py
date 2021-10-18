count = int(input())

for i in range(count):
    fridays = 0

    line1 = [ int(x) for x in input().split() ]
    days = [ int(x) for x in input().split() ]

    D = line1[0]
    M = line1[1]

    leftover = 0

    for day in days:
        if leftover == 0 and day >= 13:
            fridays += 1
        
        leftover = (leftover + day) % 7
    
    print(fridays)
