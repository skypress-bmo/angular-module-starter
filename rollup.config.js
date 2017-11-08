export default {
  entry: 'dist/index.js',
  dest: 'dist/bundles/wp-client.umd.js',
  sourceMap: false,
  format: 'umd',
  moduleName: 'ng.moduleStarter',
  globals: {
    '@angular/core': 'ng.core'
  }
}
