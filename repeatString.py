def repeatedString(s, n):
    count = 0
    for i in s[0 : len(s) : 1]:
        if i == "a":
            count= count + 1
    count*= int(n / len(s))
    for i in s[0 : n%len(s) : 1]:
        if i == "a":
            count= count + 1
    return count

print(repeatedString("aba", 10))