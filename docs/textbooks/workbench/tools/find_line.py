"""find_line.py <shots-dir> <prefix> <phrase> : first shot of a page whose OCR has a line containing <phrase>; prints 'file y'."""
import glob, os, subprocess, sys
d, prefix, phrase = sys.argv[1], sys.argv[2], sys.argv[3].lower()
ocr = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'ocr-fast')
for f in sorted(glob.glob(os.path.join(d, prefix + '*.png'))):
    for row in subprocess.run([ocr, f], capture_output=True, text=True).stdout.splitlines():
        x, y, w, h, t = row.split('\t', 4)
        if phrase in t.lower():
            print(f, y)
            sys.exit(0)
print('NOTFOUND', prefix, phrase)
