"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MainController = void 0;
const common_1 = require("@nestjs/common");
const roles_guard_1 = require("../common/guards/roles.guard");
const request_dto_1 = require("./dto/request.dto");
const main_service_1 = require("./main.service");
let MainController = class MainController {
    constructor(mainService) {
        this.mainService = mainService;
    }
    findOne(req) {
        return this.mainService.process(req);
    }
};
__decorate([
    (0, common_1.Post)('message'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [request_dto_1.RequestDTO]),
    __metadata("design:returntype", void 0)
], MainController.prototype, "findOne", null);
MainController = __decorate([
    (0, common_1.UseGuards)(roles_guard_1.RolesGuard),
    (0, common_1.Controller)('/'),
    __metadata("design:paramtypes", [main_service_1.MainService])
], MainController);
exports.MainController = MainController;
//# sourceMappingURL=main.controller.js.map