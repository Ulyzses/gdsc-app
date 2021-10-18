operators = ['+', '-', '*', '//']

data = dict()

for i in operators:
    for j in operators:
        for k in operators:
            exp = '4 {} 4 {} 4 {} 4'.format(i, j, k)
            val = eval(exp)

            if val not in data:
                data[val] = exp.replace('//', '/')

count = int(input())

for i in range(count):
    num = int(input())

    if num in data:
        print('{} = {}'.format(data[num], num))
    else:
        print('no solution')