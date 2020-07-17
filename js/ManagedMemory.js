"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ManagedMemory = void 0;
var ManagedMemory = (function () {
    function ManagedMemory() {
    }
    ManagedMemory.prototype.ref = function (pointer) {
        if (pointer.memory !== this.mmName) {
            throw new Error('ManagedMemory Error:pointer is not ');
        }
        return this.mmBuffer[pointer.address];
    };
    return ManagedMemory;
}());
exports.ManagedMemory = ManagedMemory;
//# sourceMappingURL=ManagedMemory.js.map