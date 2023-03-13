"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MainService = void 0;
const common_1 = require("@nestjs/common");
const invalid_message_exception_1 = require("./error/invalid-message.exception");
const CONTEXT_MAP = {
    "Hello": "Welcome to StationFive.",
    "Hi": "Welcome to StationFive.",
    "Goodbye": "Thank you, see you around.",
    "bye": "Thank you, see you around.",
    "No Context": "Sorry, I don't understand.",
};
let MainService = class MainService {
    async process(req) {
        const correctMessage = this.getCorrectMessage(req.message);
        if (!correctMessage) {
            throw new invalid_message_exception_1.InvalidMessageException();
        }
        return {
            response_id: req.conversation_id,
            response: correctMessage
        };
    }
    getCorrectMessage(message) {
        let words = message.split(" ");
        console.log("words: ", words);
        for (let word of words) {
            word = word.replace(/[^a-zA-Z!0-9]/gi, '');
            console.log("new word ", word);
            const response = CONTEXT_MAP[word];
            if (response) {
                return response;
            }
        }
        return null;
    }
};
MainService = __decorate([
    (0, common_1.Injectable)()
], MainService);
exports.MainService = MainService;
//# sourceMappingURL=main.service.js.map