module.exports = {
  name: "core-icon",
  preset: "../../../jest.config.js",
  coverageDirectory: "../../../coverage/libs/core/icon",
  snapshotSerializers: [
    "jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js",
    "jest-preset-angular/build/AngularSnapshotSerializer.js",
    "jest-preset-angular/build/HTMLCommentSerializer.js",
  ],
};
