module.exports = {
  name: 'website-claims',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/website/claims',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};
