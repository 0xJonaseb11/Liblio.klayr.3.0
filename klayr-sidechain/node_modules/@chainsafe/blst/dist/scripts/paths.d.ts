export declare const PREBUILD_DIR: string;
export declare const PACKAGE_JSON_PATH: string;
export declare const BINDINGS_DIR: string;
export declare const BLST_WRAP_CPP_PREBUILD: string;
/**
 * Get binary name.
 * name: {platform}-{arch}-{v8 version}.node
 */
export declare function getBinaryName(): string;
export declare function getBinaryPath(): string;
export declare function mkdirBinary(): void;
export declare function ensureDirFromFilepath(filepath: string): void;
/**
 * The output of node-gyp is not at a predictable path but various
 * depending on the OS.
 * Paths based on https://github.com/TooTallNate/node-bindings/blob/c8033dcfc04c34397384e23f7399a30e6c13830d/bindings.js#L36
 */
export declare function findBindingsFile(dirpath: string): string;
export declare class NotNodeJsError extends Error {
    constructor(missingItem: string);
}
//# sourceMappingURL=paths.d.ts.map