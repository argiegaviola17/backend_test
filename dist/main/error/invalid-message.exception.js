"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvalidMessageException = void 0;
const common_1 = require("@nestjs/common");
class InvalidMessageException extends common_1.HttpException {
    constructor() {
        super("Invalid Message", common_1.HttpStatus.BAD_REQUEST);
    }
}
exports.InvalidMessageException = InvalidMessageException;
//# sourceMappingURL=invalid-message.exception.js.map