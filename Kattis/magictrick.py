foo = input()

hasDuplicate = 1

for index, letter in enumerate(foo):
    if foo.index(letter) != index:
        hasDuplicate = 0
        break

print(hasDuplicate)