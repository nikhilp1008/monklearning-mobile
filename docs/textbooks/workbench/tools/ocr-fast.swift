// ocr <png>: prints every text line Vision finds as "x<TAB>y<TAB>w<TAB>h<TAB>text" in image pixels (origin top-left).
import Foundation
import Vision
import AppKit
let url = URL(fileURLWithPath: CommandLine.arguments[1])
guard let img = NSImage(contentsOf: url), let cg = img.cgImage(forProposedRect: nil, context: nil, hints: nil) else { exit(1) }
let W = Double(cg.width), H = Double(cg.height)
let req = VNRecognizeTextRequest()
req.recognitionLevel = CommandLine.arguments.count > 2 ? .accurate : .fast
req.usesLanguageCorrection = false
try VNImageRequestHandler(cgImage: cg, options: [:]).perform([req])
for o in (req.results ?? []) {
  guard let t = o.topCandidates(1).first else { continue }
  let b = o.boundingBox
  print(String(format: "%.0f\t%.0f\t%.0f\t%.0f\t%@", b.minX * W, (1 - b.maxY) * H, b.width * W, b.height * H, t.string))
}
