"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSwigMajorVersion = exports.assertSupportedSwigVersion = void 0;
const exec_1 = require("./exec");
/**
 * Throw error if SWIG is not installed or version is < 4
 */
async function assertSupportedSwigVersion() {
    const swigMajorVersion = await getSwigMajorVersion();
    if (swigMajorVersion < 4) {
        throw Error("Unsupported SWIG version, must be >= 4");
    }
}
exports.assertSupportedSwigVersion = assertSupportedSwigVersion;
/**
 * Parses major version for swig -version
 */
async function getSwigMajorVersion() {
    const swigVersionOutput = await exec_1.exec("swig", ["-version"]).catch((e) => {
        e.message = `SWIG is not installed ${e.message}`;
        throw e;
    });
    // ["SWIG Version 4", "4"]
    const match = swigVersionOutput.match(/SWIG Version ([0-9]+)/);
    const majorVersion = match ? parseInt(match[1]) : null;
    if (!majorVersion) {
        throw Error("Unexpected SWIG version format " + majorVersion);
    }
    return majorVersion;
}
exports.getSwigMajorVersion = getSwigMajorVersion;
//# sourceMappingURL=swig.js.map