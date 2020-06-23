module.exports = {
  name: "core-alert-banner",
  preset: "../../../jest.config.js",
  coverageDirectory: "../../../coverage/libs/core/alert-banner",
  snapshotSerializers: [
    "jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js",
    "jest-preset-angular/build/AngularSnapshotSerializer.js",
    "jest-preset-angular/build/HTMLCommentSerializer.js",
  ],
};
