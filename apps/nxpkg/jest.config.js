module.exports = {
  name: 'nxpkg',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/nxpkg',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
