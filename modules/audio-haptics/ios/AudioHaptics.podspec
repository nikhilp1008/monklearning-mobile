Pod::Spec.new do |s|
  s.name           = 'AudioHaptics'
  s.version        = '1.0.0'
  s.summary        = 'Lets haptics play while the classroom mic is recording'
  s.description    = 'Sets AVAudioSession allowHapticsAndSystemSoundsDuringRecording.'
  s.author         = 'MonkLearning'
  s.homepage       = 'https://monklearning.com'
  s.license        = { :type => 'MIT' }
  s.platforms      = { :ios => '15.1' }
  s.source         = { :git => '' }
  s.static_framework = true
  s.dependency 'ExpoModulesCore'
  s.source_files = "**/*.swift"
end
