"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const exec_1 = require("./exec");
const swig_1 = require("./swig");
/* eslint-disable no-console */
// CLI runner
runSwig().then(() => process.exit(0), (e) => {
    console.log(e.stack);
    process.exit(1);
});
async function runSwig() {
    const sourceSwgFile = process.argv[1];
    const targetCppFile = process.argv[2];
    console.log({ sourceSwgFile, targetCppFile });
    // Check SWIG version
    await swig_1.assertSupportedSwigVersion();
    // Build blst_wrap.cpp with SWIG
    try {
        await exec_1.exec("swig", ["-c++", "-javascript", "-node", "-DV8_VERSION=0x060000", "-o", targetCppFile, sourceSwgFile]);
    }
    catch (e) {
        console.error("Error running SWIG");
        throw e;
    }
    console.log("Done");
}
//# sourceMappingURL=blst_wrap.js.map