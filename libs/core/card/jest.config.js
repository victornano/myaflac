module.exports = {
  name: "core-card",
  preset: "../../../jest.config.js",
  coverageDirectory: "../../../coverage/libs/core/card",
  snapshotSerializers: [
    "jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js",
    "jest-preset-angular/build/AngularSnapshotSerializer.js",
    "jest-preset-angular/build/HTMLCommentSerializer.js",
  ],
};
