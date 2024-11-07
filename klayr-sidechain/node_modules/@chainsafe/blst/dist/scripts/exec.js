"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.exec = void 0;
const child_process_1 = __importDefault(require("child_process"));
async function exec(cmd, args, options) {
    return new Promise((resolve, reject) => {
        const proc = child_process_1.default.execFile(cmd, args, {
            timeout: 3 * 60 * 1000,
            maxBuffer: 10e6,
            encoding: "utf8",
            ...options,
        }, (err, stdout, stderr) => {
            if (err)
                reject(err);
            else
                resolve(stdout.trim() || stderr || "");
        });
        if (proc.stdout)
            proc.stdout.pipe(process.stdout);
        if (proc.stderr)
            proc.stderr.pipe(process.stderr);
    });
}
exports.exec = exec;
//# sourceMappingURL=exec.js.map