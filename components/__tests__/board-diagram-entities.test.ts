import { parse } from 'react-native-svg';

import { decodeTextNodes, decodeXmlEntities } from '@/components/board-diagram';

describe('SVG text: XML character references are decoded (X1)', () => {
  it('decodes the five named references and numeric ones, decimal and hex', () => {
    expect(decodeXmlEntities('lambda / a &lt;&lt; 1 -&gt; bending')).toBe('lambda / a << 1 -> bending');
    expect(decodeXmlEntities('R &amp; D &quot;x&quot; &apos;y&apos;')).toBe('R & D "x" \'y\'');
    expect(decodeXmlEntities('&#952; = 30&#176; &#8594; &#x3bb;')).toBe('θ = 30° → λ');
    expect(decodeXmlEntities('&#181;F and &#8722;5')).toBe('µF and −5');
  });

  it('leaves text without references, unknown names and invalid code points alone', () => {
    expect(decodeXmlEntities('plain 2 < 3 text')).toBe('plain 2 < 3 text');
    expect(decodeXmlEntities('&nbsp; &copy; &#0; &#x110000;')).toBe('&nbsp; &copy; &#0; &#x110000;');
  });

  it('decodes only once: &amp;lt; is the text "&lt;", not "<"', () => {
    expect(decodeXmlEntities('&amp;lt;')).toBe('&lt;');
  });

  it('as parse middleware, every text node in the tree comes out decoded', () => {
    const svg =
      '<svg viewBox="0 0 100 40"><text x="1" y="12">a &lt; b</text>' +
      '<g><text x="1" y="30">k<tspan>&#8594;</tspan>&gt;</text></g></svg>';
    const texts: string[] = [];
    const collect = (n: { children: unknown[] }) => {
      for (const c of n.children) {
        if (typeof c === 'string') texts.push(c);
        else collect(c as { children: unknown[] });
      }
    };
    parse(svg, (root) => {
      const out = decodeTextNodes(root);
      collect(out);
      return out;
    });
    expect(texts).toEqual(['a < b', 'k', '→', '>']);
  });
});
