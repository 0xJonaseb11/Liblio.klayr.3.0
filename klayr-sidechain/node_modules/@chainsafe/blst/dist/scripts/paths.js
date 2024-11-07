"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotNodeJsError = exports.findBindingsFile = exports.ensureDirFromFilepath = exports.mkdirBinary = exports.getBinaryPath = exports.getBinaryName = exports.BLST_WRAP_CPP_PREBUILD = exports.BINDINGS_DIR = exports.PACKAGE_JSON_PATH = exports.PREBUILD_DIR = void 0;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const ROOT_DIR = path_1.default.join(__dirname, "../..");
const BLST_NODE = "blst.node";
exports.PREBUILD_DIR = path_1.default.join(ROOT_DIR, "prebuild");
exports.PACKAGE_JSON_PATH = path_1.default.join(ROOT_DIR, "package.json");
exports.BINDINGS_DIR = path_1.default.join(ROOT_DIR, "blst/bindings/node.js");
// Paths for blst_wrap.cpp
// Resolve path to absolute since it will be used from a different working dir
// when running blst_wrap.py
exports.BLST_WRAP_CPP_PREBUILD = path_1.default.resolve(ROOT_DIR, "prebuild", "blst_wrap.cpp");
/**
 * Get binary name.
 * name: {platform}-{arch}-{v8 version}.node
 */
function getBinaryName() {
    const platform = process.platform;
    const arch = process.arch;
    const nodeV8CppApiVersion = process.versions.modules;
    if (!process)
        throw new NotNodeJsError("global object");
    if (!platform)
        throw new NotNodeJsError("process.platform");
    if (!arch)
        throw new NotNodeJsError("process.arch");
    if (!process.versions.modules)
        throw new NotNodeJsError("process.versions.modules");
    return [platform, arch, nodeV8CppApiVersion, "binding.node"].join("-");
}
exports.getBinaryName = getBinaryName;
function getBinaryPath() {
    return path_1.default.join(exports.PREBUILD_DIR, getBinaryName());
}
exports.getBinaryPath = getBinaryPath;
function mkdirBinary() {
    if (!fs_1.default.existsSync(exports.PREBUILD_DIR)) {
        fs_1.default.mkdirSync(exports.PREBUILD_DIR);
    }
}
exports.mkdirBinary = mkdirBinary;
function ensureDirFromFilepath(filepath) {
    const dirpath = path_1.default.dirname(filepath);
    if (!fs_1.default.existsSync(dirpath)) {
        fs_1.default.mkdirSync(dirpath, { recursive: true });
    }
}
exports.ensureDirFromFilepath = ensureDirFromFilepath;
/**
 * The output of node-gyp is not at a predictable path but various
 * depending on the OS.
 * Paths based on https://github.com/TooTallNate/node-bindings/blob/c8033dcfc04c34397384e23f7399a30e6c13830d/bindings.js#L36
 */
function findBindingsFile(dirpath) {
    const filepaths = [
        // In dirpath
        [dirpath, BLST_NODE],
        // node-gyp's linked version in the "build" dir
        [dirpath, "build", BLST_NODE],
        // node-waf and gyp_addon (a.k.a node-gyp)
        [dirpath, "build", "Debug", BLST_NODE],
        [dirpath, "build", "Release", BLST_NODE],
        // Debug files, for development (legacy behavior, remove for node v0.9)
        [dirpath, "out", "Debug", BLST_NODE],
        [dirpath, "Debug", BLST_NODE],
        // Release files, but manually compiled (legacy behavior, remove for node v0.9)
        [dirpath, "out", "Release", BLST_NODE],
        [dirpath, "Release", BLST_NODE],
        // Legacy from node-waf, node <= 0.4.x
        [dirpath, "build", "default", BLST_NODE],
        // Production "Release" buildtype binary (meh...)
        [dirpath, "compiled", "version", "platform", "arch", BLST_NODE],
        // node-qbs builds
        [dirpath, "addon-build", "release", "install-root", BLST_NODE],
        [dirpath, "addon-build", "debug", "install-root", BLST_NODE],
        [dirpath, "addon-build", "default", "install-root", BLST_NODE],
        // node-pre-gyp path ./lib/binding/{node_abi}-{platform}-{arch}
        [dirpath, "lib", "binding", "nodePreGyp", BLST_NODE],
    ].map((pathParts) => path_1.default.join(...pathParts));
    for (const filepath of filepaths) {
        if (fs_1.default.existsSync(filepath)) {
            return filepath;
        }
    }
    throw Error(`Could not find bindings file. Tried:\n${filepaths.join("\n")}`);
}
exports.findBindingsFile = findBindingsFile;
class NotNodeJsError extends Error {
    constructor(missingItem) {
        super(`BLST bindings loader should only run in a NodeJS context: ${missingItem}`);
    }
}
exports.NotNodeJsError = NotNodeJsError;
//# sourceMappingURL=paths.js.map