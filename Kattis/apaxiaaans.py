name = input()

previous = ''
short = ''

for letter in name:
    if letter == previous:
        continue

    short += letter
    previous = letter

print(short)