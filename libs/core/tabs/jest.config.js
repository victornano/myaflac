module.exports = {
  name: "core-tabs",
  preset: "../../../jest.config.js",
  coverageDirectory: "../../../coverage/libs/core/tabs",
  snapshotSerializers: [
    "jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js",
    "jest-preset-angular/build/AngularSnapshotSerializer.js",
    "jest-preset-angular/build/HTMLCommentSerializer.js",
  ],
};
