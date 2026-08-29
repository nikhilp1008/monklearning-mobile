"""
Read a reference PDF as plain text.

    python3 scripts/extract-pdf.py <file.pdf> <firstPage> <lastPage>

Stdlib only, because poppler is not installed and a chapter author should not
have to install anything to read the book they are writing from. Decompresses
FlateDecode content streams and maps glyph codes through the document's own
ToUnicode CMaps.

Two things it gets right that a naive reader does not, both found the hard way
by chapter authors:

  * A bfrange target can be a surrogate pair or a multi-character string.
    Reading it as one integer overflows, which crashed this from page 145 of
    the Class 11 book onward.
  * A PDF encodes an inter-word space as a large negative kerning adjustment
    inside a TJ array, not as a space character. Ignoring those numbers ran
    every word together. A synthetic space must also bypass the font's CMap:
    these documents map code 32 to '='.

Check the output on a body page before trusting a whole book.
"""
import re, zlib, sys, json

if len(sys.argv) < 2:
    sys.exit(__doc__)
SRC = sys.argv[1]
data = open(SRC, 'rb').read()

# --- indirect objects -------------------------------------------------------
objs = {}
for m in re.finditer(rb'(\d+)\s+(\d+)\s+obj\b', data):
    num = int(m.group(1))
    start = m.end()
    end = data.find(b'endobj', start)
    if end == -1:
        continue
    objs[num] = data[start:end]

def deref(tok, depth=0):
    """Resolve '12 0 R' to its object body."""
    if depth > 8:
        return b''
    m = re.match(rb'\s*(\d+)\s+\d+\s+R\b', tok)
    if m:
        return objs.get(int(m.group(1)), b'')
    return tok

def stream_of(body):
    m = re.search(rb'stream\r?\n', body)
    if not m:
        return None
    raw = body[m.end():]
    e = raw.rfind(b'endstream')
    if e != -1:
        raw = raw[:e]
    try:
        return zlib.decompress(raw)
    except Exception:
        try:
            return zlib.decompressobj().decompress(raw)
        except Exception:
            return None

# --- ToUnicode CMaps --------------------------------------------------------
cmap_cache = {}
def parse_cmap(objnum):
    if objnum in cmap_cache:
        return cmap_cache[objnum]
    body = objs.get(objnum, b'')
    s = stream_of(body)
    table = {}
    if s:
        txt = s.decode('latin-1', 'replace')
        def utf16be(hexstr):
            # A CMap target is UTF-16BE, and may be a surrogate pair or a
            # multi-character string. Decoding it as such is the only correct
            # reading; treating it as one big integer overflows on long
            # targets, which is what crashed this from page 145 on.
            try:
                return bytes.fromhex(hexstr).decode('utf-16-be', 'ignore')
            except ValueError:
                return ''

        for blk in re.findall(r'beginbfchar(.*?)endbfchar', txt, re.S):
            for src, dst in re.findall(r'<([0-9A-Fa-f]+)>\s*<([0-9A-Fa-f]+)>', blk):
                try:
                    table[int(src, 16)] = utf16be(dst)
                except ValueError:
                    pass
        for blk in re.findall(r'beginbfrange(.*?)endbfrange', txt, re.S):
            for lo, hi, dst in re.findall(
                    r'<([0-9A-Fa-f]+)>\s*<([0-9A-Fa-f]+)>\s*<([0-9A-Fa-f]+)>', blk):
                try:
                    lo_i, hi_i = int(lo, 16), int(hi, 16)
                    base = utf16be(dst)
                    if not base:
                        continue
                    # Only the final code unit advances across the range; the
                    # prefix, if any, is a fixed string.
                    head, tail = base[:-1], ord(base[-1])
                    for k in range(lo_i, min(hi_i, lo_i + 65535) + 1):
                        cp = tail + (k - lo_i)
                        if cp > 0x10FFFF:
                            break
                        table[k] = head + chr(cp)
                except (ValueError, OverflowError):
                    pass
    cmap_cache[objnum] = table
    return table

def font_map(fobj_num):
    """code -> unicode for a font object number, plus its byte width."""
    body = objs.get(fobj_num, b'')
    m = re.search(rb'/ToUnicode\s+(\d+)\s+\d+\s+R', body)
    table = parse_cmap(int(m.group(1))) if m else {}
    two = b'/Type0' in body or b'/Identity-H' in body
    return table, (2 if two else 1)

# --- pages in order ---------------------------------------------------------
def page_kids(node_num, seen=None):
    if seen is None:
        seen = set()
    if node_num in seen:
        return []
    seen.add(node_num)
    body = objs.get(node_num, b'')
    if b'/Type' in body and re.search(rb'/Type\s*/Page\b', body):
        return [node_num]
    out = []
    km = re.search(rb'/Kids\s*\[(.*?)\]', body, re.S)
    if km:
        for kid in re.findall(rb'(\d+)\s+\d+\s+R', km.group(1)):
            out.extend(page_kids(int(kid), seen))
    return out

root_num = None
for m in re.finditer(rb'/Type\s*/Catalog', data):
    seg = data.rfind(b' obj', 0, m.start())
    hm = None
    for om in re.finditer(rb'(\d+)\s+\d+\s+obj\b', data[:m.start()]):
        hm = om
    if hm:
        root_num = int(hm.group(1))
    break
pages = []
if root_num is not None:
    body = objs.get(root_num, b'')
    pm = re.search(rb'/Pages\s+(\d+)\s+\d+\s+R', body)
    if pm:
        pages = page_kids(int(pm.group(1)))
if not pages:
    pages = sorted(n for n, b in objs.items() if re.search(rb'/Type\s*/Page\b', b))

# --- per-page text ----------------------------------------------------------
def page_text(pnum):
    body = objs.get(pnum, b'')
    # fonts
    fonts = {}
    res = body
    rm = re.search(rb'/Resources\s+(\d+)\s+\d+\s+R', body)
    if rm:
        res = objs.get(int(rm.group(1)), b'')
    fm = re.search(rb'/Font\s*<<(.*?)>>', res, re.S)
    if not fm:
        fr = re.search(rb'/Font\s+(\d+)\s+\d+\s+R', res)
        fdict = objs.get(int(fr.group(1)), b'') if fr else b''
        fm = re.search(rb'<<(.*)>>', fdict, re.S)
    if fm:
        for name, num in re.findall(rb'/([^\s/<>]+)\s+(\d+)\s+\d+\s+R', fm.group(1)):
            fonts[name.decode('latin-1')] = font_map(int(num))
    # content
    chunks = []
    cm = re.search(rb'/Contents\s+(\d+)\s+\d+\s+R', body)
    if cm:
        s = stream_of(objs.get(int(cm.group(1)), b''))
        if s:
            chunks.append(s)
    else:
        cm = re.search(rb'/Contents\s*\[(.*?)\]', body, re.S)
        if cm:
            for num in re.findall(rb'(\d+)\s+\d+\s+R', cm.group(1)):
                s = stream_of(objs.get(int(num), b''))
                if s:
                    chunks.append(s)
    content = b'\n'.join(chunks).decode('latin-1', 'replace')

    out, cur, last_y = [], ('', ({}, 1)), None
    for tok in re.finditer(
            r'/([^\s/]+)\s+[\d.]+\s+Tf|([-\d.]+)\s+([-\d.]+)\s+Td|'
            r'1\s+0\s+0\s+1\s+([-\d.]+)\s+([-\d.]+)\s+Tm|T\*|'
            r'\[(.*?)\]\s*TJ|\((.*?)\)\s*Tj|<([0-9A-Fa-f\s]+)>\s*Tj', content, re.S):
        if tok.group(1):
            cur = (tok.group(1), fonts.get(tok.group(1), ({}, 1)))
            continue
        y = None
        if tok.group(5):
            y = float(tok.group(5))
        elif tok.group(3):
            y = float(tok.group(3))
        if y is not None:
            if last_y is not None and abs(y - last_y) > 1.5:
                out.append('\n')
            last_y = y
            continue
        table, width = cur[1]
        pieces = []
        body_txt = tok.group(6) or tok.group(8) or ''
        if tok.group(7) is not None:
            pieces.append(('lit', tok.group(7)))
        else:
            # Walk the TJ array IN ORDER: strings and the kerning numbers
            # between them. A PDF usually encodes an inter-word space as a
            # large negative adjustment rather than a space character, so
            # ignoring the numbers (as this did) ran every word together.
            for tk in re.finditer(
                    r'<([0-9A-Fa-f\s]+)>|\(((?:[^()\\]|\\.)*)\)|(-?[\d.]+)',
                    body_txt):
                if tk.group(1) is not None:
                    pieces.append(('hex', re.sub(r'\s', '', tk.group(1))))
                elif tk.group(2) is not None:
                    pieces.append(('lit', tk.group(2)))
                else:
                    try:
                        if float(tk.group(3)) <= -120:
                            # 'gap', not 'lit': a synthetic space must not be
                            # looked up in the font's CMap, which in this
                            # document maps code 32 to '='.
                            pieces.append(('gap', ' '))
                    except ValueError:
                        pass
        for kind, val in pieces:
            if kind == 'gap':
                out.append(' ')
                continue
            if kind == 'hex':
                codes = [int(val[i:i+2*width], 16)
                         for i in range(0, len(val) - 1, 2*width)]
            else:
                val = (val.replace('\\(', '(').replace('\\)', ')')
                          .replace('\\\\', '\\'))
                codes = [ord(c) for c in val]
            for c in codes:
                out.append(table.get(c, chr(c) if 32 <= c < 127 else ''))
    return re.sub(r'\n{3,}', '\n\n', ''.join(out))

if __name__ == '__main__':
    a = int(sys.argv[2]) if len(sys.argv) > 2 else 1
    b = int(sys.argv[3]) if len(sys.argv) > 3 else len(pages)
    for i in range(a - 1, min(b, len(pages))):
        print(f'\n===== PAGE {i+1} =====')
        print(page_text(pages[i]))
