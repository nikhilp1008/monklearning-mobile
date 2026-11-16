// bottom <png>... : for each image, the lowest row (y 300–2050, x 110–970) holding a pixel darker than 170, i.e. where a card's content ends.
import AppKit
for p in CommandLine.arguments.dropFirst() {
  guard let img = NSImage(contentsOfFile: p), let tiff = img.tiffRepresentation, let b = NSBitmapImageRep(data: tiff) else { continue }
  var last = 300
  outer: for y in stride(from: min(2050, b.pixelsHigh - 1), to: 300, by: -4) {
    for x in stride(from: 110, to: min(970, b.pixelsWide), by: 3) {
      guard let c = b.colorAt(x: x, y: y)?.usingColorSpace(.deviceRGB) else { continue }
      if 255 * (0.299 * c.redComponent + 0.587 * c.greenComponent + 0.114 * c.blueComponent) < 170 { last = y; break outer }
    }
  }
  print("\(last)\t\((p as NSString).lastPathComponent)")
}
