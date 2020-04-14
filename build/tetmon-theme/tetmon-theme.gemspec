# frozen_string_literal: true

Gem::Specification.new do |spec|
  spec.name          = "cdfg-theme"
  spec.version       = "0.1.0"
  spec.authors       = ["Steve Sunderland"]
  spec.email         = ["stevesunderland@gmail.com"]

  spec.summary       = "Write a short summary, because Rubygems requires one."
  spec.homepage      = "https://cdfg.csail.mit.edu"
  spec.license       = "MIT"

  spec.files = `git ls-files -z`.split("\x0").select do |f|
    f.match(%r{^(_(includes|layouts|sass)/|(LICENSE|README)((\.(txt|md|markdown)|$)))}i)
  end
  spec.add_runtime_dependency "jekyll", "~> 4.0"

  spec.add_development_dependency "bundler", "~> 1.16"
  spec.add_development_dependency "rake", "~> 12.0"
end
