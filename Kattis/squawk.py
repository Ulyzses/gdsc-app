class User:
    def __init__(self, index):
        self.index = index
        self.squawks = 0
        self.tempSquawks = 0
        self.adjacent = []
    
    def addAdjacent(self, node):
        self.adjacent.append(node)

    def getSquawks(self, count):
        self.tempSquawks += count
    
    def sendSquawks(self):
        for user in self.adjacent:
            user.getSquawks(self.squawks)

        temp = self.squawks
        self.squawks = 0
        
        return temp * len(self.adjacent)
    
    def resolveSquawks(self):
        self.squawks = self.tempSquawks
        self.tempSquawks = 0


def setAdjacent(user1, user2):
    user1.addAdjacent(user2)
    user2.addAdjacent(user1)


[ n_users, n_links, init, time ] = [ int(x) for x in input().split() ]

users = []

for i in range(n_users):
    users.append( User(i) )

for i in range(n_links):
    [ node1, node2 ] = [ int(x) for x in input().split() ]
    setAdjacent(users[node1], users[node2])

users[init].squawks += 1

for t in range(time):
    count = 0

    for user in users:
        count += user.sendSquawks()
    
    for user in users:
        user.resolveSquawks()

print(count)