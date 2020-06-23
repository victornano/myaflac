module.exports = {
  name: "core-step-bar",
  preset: "../../../jest.config.js",
  coverageDirectory: "../../../coverage/libs/core/step-bar",
  snapshotSerializers: [
    "jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js",
    "jest-preset-angular/build/AngularSnapshotSerializer.js",
    "jest-preset-angular/build/HTMLCommentSerializer.js",
  ],
};
