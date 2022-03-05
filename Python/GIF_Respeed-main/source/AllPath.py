import os
from os.path import join, getsize
listName = []
rootPath = '/Users/tuan200/2_LOCAL/Programing-Language/Python/GIF_Respeed-main/source/animated/'
for root, dirs, files in os.walk(rootPath):
    for f in files:
        print(join(root, f))
