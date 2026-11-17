// ink <png>... : for each image, the darkest pixel's luminance (0–255) in the card band y 560–1400, x 90–990.
// Normal text is near 30; a card left half-faded (opacity 0.55) has nothing darker than ~120.
import AppKit
for p in CommandLine.arguments.dropFirst() {
  guard let img = NSImage(contentsOfFile: p), let tiff = img.tiffRepresentation, let b = NSBitmapImageRep(data: tiff) else { continue }
  var m = 255.0
  for y in stride(from: 560, to: min(1400, b.pixelsHigh), by: 2) { for x in stride(from: 90, to: min(990, b.pixelsWide), by: 2) {
    guard let c = b.colorAt(x: x, y: y)?.usingColorSpace(.deviceRGB) else { continue }
    let l = 255 * (0.299 * c.redComponent + 0.587 * c.greenComponent + 0.114 * c.blueComponent)
    if l < m { m = l }
  } }
  print(String(format: "%.0f\t%@", m, (p as NSString).lastPathComponent))
}
