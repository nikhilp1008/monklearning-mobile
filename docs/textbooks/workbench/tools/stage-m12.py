"""Stage Maths 12 chapters up to N: filtered copies of the shared registration files go into the index only
(git hash-object + update-index), the working tree keeps every chapter. Usage: python3 stage-m12.py N"""
import re, subprocess, sys
N = int(sys.argv[1])
R = '/Users/nikhi/Developer/monk-learning-app/'
later = range(N + 1, 14)
def keep(line):
    for k in later:
        kk = f'{k:02d}'
        if re.search(rf"math12ch{k}\b|math-12-{kk}\b|MATHEMATICS_12_{kk}\b|mathematics-12-{kk}\b|M12_{kk}\b|'mathematics\|12\|{k}'", line):
            return False
    return True
def filt(text):
    out = []
    for line in text.splitlines(keepends=True):
        if (line.lstrip().startswith('import') or "'mathematics|12|" in line) and not keep(line):
            continue
        for k in later:  # array entries on a shared line
            line = re.sub(rf", math12ch{k}\b", '', line)
        out.append(line)
    return ''.join(out)
def stage(path, text):
    h = subprocess.run(['git', 'hash-object', '-w', '--stdin'], input=text.encode(), capture_output=True, cwd=R, check=True).stdout.decode().strip()
    subprocess.run(['git', 'update-index', '--cacheinfo', f'100644,{h},{path}'], cwd=R, check=True)
for p in ['content/textbooks/test-support/book-list.ts', 'content/textbooks/__tests__/book-chapters.test.ts', 'lib/diagrams/index.ts', 'lib/revise/keypoints.ts']:
    stage(p, filt(open(R + p).read()))
ce = open(R + 'lib/chapter-essentials.ts').read()
ce = re.sub(r"'mathematics\|12': \[[^\]]*\]", "'mathematics|12': [" + ', '.join(str(i) for i in range(N)) + ']', ce)
stage('lib/chapter-essentials.ts', ce)
print('staged shared files for chapters up to', N)
