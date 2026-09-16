Pod::Spec.new do |s|
  s.name           = 'PcmPlayer'
  s.version        = '1.0.0'
  s.summary        = 'Gapless PCM playback for the follow-up voice'
  s.description    = 'Schedules raw Int16 PCM buffers on AVAudioEngine as they stream.'
  s.author         = 'MonkLearning'
  s.homepage       = 'https://monklearning.com'
  s.license        = { :type => 'MIT' }
  s.platforms      = { :ios => '15.1' }
  s.source         = { :git => '' }
  s.static_framework = true
  s.dependency 'ExpoModulesCore'
  s.source_files = "**/*.swift"
end
