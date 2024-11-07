"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.downloadBindings = void 0;
const testBindings_1 = require("./testBindings");
const paths_1 = require("./paths");
const downloadReleaseAsset_1 = require("./downloadReleaseAsset");
async function downloadBindings(binaryPath) {
    const binaryName = paths_1.getBinaryName();
    await downloadReleaseAsset_1.downloadReleaseAsset(binaryName, binaryPath);
    // Make sure downloaded bindings work
    await testBindings_1.testBindings(binaryPath);
}
exports.downloadBindings = downloadBindings;
//# sourceMappingURL=downloadBindings.js.map