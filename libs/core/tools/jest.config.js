module.exports = {
  name: "core-tools",
  preset: "../../../jest.config.js",
  coverageDirectory: "../../../coverage/libs/core/tools",
  snapshotSerializers: [
    "jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js",
    "jest-preset-angular/build/AngularSnapshotSerializer.js",
    "jest-preset-angular/build/HTMLCommentSerializer.js",
  ],
};
