"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isApplicationRunning = exports.getPid = void 0;
const fs_extra_1 = require("fs-extra");
const path_1 = require("./path");
const getPid = (dataPath) => parseInt((0, fs_extra_1.readFileSync)((0, path_1.getPidPath)(dataPath), { encoding: 'utf8' }), 10);
exports.getPid = getPid;
const isApplicationRunning = (dataPath) => {
    const pidPath = (0, path_1.getPidPath)(dataPath);
    if (!(0, fs_extra_1.pathExistsSync)(pidPath)) {
        return false;
    }
    const pid = (0, exports.getPid)(dataPath);
    try {
        process.kill(pid, 0);
    }
    catch (e) {
        if (e.code) {
            return e.code === 'EPERM';
        }
        return false;
    }
    return true;
};
exports.isApplicationRunning = isApplicationRunning;
//# sourceMappingURL=application.js.map