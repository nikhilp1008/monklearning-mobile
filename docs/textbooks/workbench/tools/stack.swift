// stack <out.png> <width> <img1> [y0 y1] <img2> [y0 y1] ... : crops each image to rows y0..y1 (whole if omitted),
// scales to <width>, and stacks them top to bottom with a thin grey rule between, for reviewing many crops at once.
import AppKit
let a = CommandLine.arguments
let out = a[1], W = CGFloat(Double(a[2])!)
var items: [(NSImage, CGRect)] = []
var i = 3
while i < a.count {
  guard let img = NSImage(contentsOfFile: a[i]), let rep = img.representations.first else { i += 1; continue }
  let pw = CGFloat(rep.pixelsWide), ph = CGFloat(rep.pixelsHigh)
  var r = CGRect(x: 0, y: 0, width: pw, height: ph)
  if i + 2 < a.count, let y0 = Double(a[i + 1]), let y1 = Double(a[i + 2]) { r = CGRect(x: 0, y: CGFloat(y0), width: pw, height: CGFloat(y1 - y0)); i += 3 } else { i += 1 }
  items.append((img, r))
}
let heights = items.map { $0.1.height * W / $0.1.width }
let H = heights.reduce(0, +) + CGFloat(items.count) * 6
let canvas = NSImage(size: NSSize(width: W, height: H))
canvas.lockFocus()
NSColor.lightGray.setFill(); NSRect(x: 0, y: 0, width: W, height: H).fill()
var y = H
for (k, (img, r)) in items.enumerated() {
  let h = heights[k]; y -= h
  let rep = img.representations.first!
  let ph = CGFloat(rep.pixelsHigh), pw = CGFloat(rep.pixelsWide)
  let sx = img.size.width / pw, sy = img.size.height / ph
  let src = NSRect(x: r.minX * sx, y: (ph - r.maxY) * sy, width: r.width * sx, height: r.height * sy)
  img.draw(in: NSRect(x: 0, y: y, width: W, height: h), from: src, operation: .copy, fraction: 1)
  y -= 6
}
canvas.unlockFocus()
let tiff = canvas.tiffRepresentation!, bmp = NSBitmapImageRep(data: tiff)!
try! bmp.representation(using: .png, properties: [:])!.write(to: URL(fileURLWithPath: out))
