module.exports = {
  name: "core-translate",
  preset: "../../../jest.config.js",
  coverageDirectory: "../../../coverage/libs/core/translate",
  snapshotSerializers: [
    "jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js",
    "jest-preset-angular/build/AngularSnapshotSerializer.js",
    "jest-preset-angular/build/HTMLCommentSerializer.js",
  ],
};
