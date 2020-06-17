module.exports = {
  name: "core-menu",
  preset: "../../../jest.config.js",
  coverageDirectory: "../../../coverage/libs/core/menu",
  snapshotSerializers: [
    "jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js",
    "jest-preset-angular/build/AngularSnapshotSerializer.js",
    "jest-preset-angular/build/HTMLCommentSerializer.js",
  ],
};
