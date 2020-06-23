module.exports = {
  name: "core-button",
  preset: "../../../jest.config.js",
  coverageDirectory: "../../../coverage/libs/core/button",
  snapshotSerializers: [
    "jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js",
    "jest-preset-angular/build/AngularSnapshotSerializer.js",
    "jest-preset-angular/build/HTMLCommentSerializer.js",
  ],
};
