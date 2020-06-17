module.exports = {
  name: "core-select",
  preset: "../../../jest.config.js",
  coverageDirectory: "../../../coverage/libs/core/select",
  snapshotSerializers: [
    "jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js",
    "jest-preset-angular/build/AngularSnapshotSerializer.js",
    "jest-preset-angular/build/HTMLCommentSerializer.js",
  ],
};
