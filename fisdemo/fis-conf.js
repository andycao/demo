// Global start

fis.match('*.jade', {
  parser: fis.plugin('jade'),
  rExt: '.html'
});

fis.match('*.styl', {
  parser: fis.plugin('stylus2'),
  rExt: '.css'
});

fis.match('*.{js,css}', {
  useHash: true
});

fis.match('::image', {
  useHash: true
});

fis.match('*.js', {
  optimizer: fis.plugin('uglify-js')
});

fis.match('*.css', {
  optimizer: fis.plugin('clean-css')
});

fis.match('*.png', {
  optimizer: fis.plugin('png-compressor')
});

