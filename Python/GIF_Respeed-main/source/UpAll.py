import os
import os.path
import sys
import os
from os.path import join, getsize


def reSpeed(targetFile, delayFPS):
    delay = ""
    if os.path.exists(targetFile):
        file = open(targetFile, "r+b")
    else:
        print("File not found. Exiting...")
        print("Error file:", targetFile)
        pass

    byte = file.read(3)
    if byte.decode() != "GIF":
        print("Error file:", targetFile)
        pass

    while not isinstance(delay, int):
        try:
            if delayFPS > 50:
                print("FPS can at most be 50")
                delay = ""
            elif delayFPS < 1:
                print("FPS must at least be 1")
                delay = ""
            else:
                delay = int(100/delayFPS)
        except:
            print("Please enter a valid integer (< 256) ")
            print("Error file:", targetFile)

    delayBytes = delay.to_bytes(1, 'little')

    while byte:
        if byte == b'\x21':
            byte = file.read(1)
            if byte == b'\xF9':
                byte = file.read(1)
                if byte == b'\x04':
                    file.seek(1, os.SEEK_CUR)
                    file.write(delayBytes)
        byte = file.read(1)
    file.close()


if __name__ == '__main__':
    rootPath = '/Users/tuan200/2_LOCAL/Programing-Language/Python/GIF_Respeed-main/source/animated/'
    for root, dirs, files in os.walk(rootPath):
        for f in files:
            # print(join(root, f))
            reSpeed(str(join(root, f)), 5)
