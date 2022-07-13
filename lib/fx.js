"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const path = "/fx";
class Fx {
    constructor(axios) {
        this.axios = axios;
    }
    GenerateQuote(payload) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.axios.post(`${path}/quote`, payload);
                return response.data;
            }
            catch (error) {
                return error;
            }
        });
    }
    ExchangeCurrency(quote_reference) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.axios.post(path, {
                    quote_reference
                });
                return response.data;
            }
            catch (error) {
                return error;
            }
        });
    }
}
exports.default = Fx;
