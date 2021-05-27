#!/bin/python3

import math
import os
import random
import re
import sys

#
# Complete the 'checkMagazine' function below.
#
# The function accepts following parameters:
#  1. STRING_ARRAY magazine
#  2. STRING_ARRAY note
#

def checkMagazine(magazine, note):
    myHash = {}
    for i in magazine:
        myHash[i] = myHash.get(i, 0) + 1
    for i in note:
        if myHash.get(i, 0) ==0:
            return print("No")          
        else:
            myHash[i] -= 1
            
    return print("Yes")       

if __name__ == '__main__':
    first_multiple_input = input().rstrip().split()

    m = int(first_multiple_input[0])

    n = int(first_multiple_input[1])

    magazine = input().rstrip().split()

    note = input().rstrip().split()

    checkMagazine(magazine, note)
