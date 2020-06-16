module.exports = {
  name: "core-notification-bar",
  preset: "../../../jest.config.js",
  coverageDirectory: "../../../coverage/libs/core/notification-bar",
  snapshotSerializers: [
    "jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js",
    "jest-preset-angular/build/AngularSnapshotSerializer.js",
    "jest-preset-angular/build/HTMLCommentSerializer.js",
  ],
};
