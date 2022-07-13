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
const path = "/bills/airtime";
class Bills {
    constructor(axios) {
        this.axios = axios;
    }
    BuyAirtime(payload) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.axios.post(path, payload);
                return response.data;
            }
            catch (error) {
                return error;
            }
        });
    }
    GetAirtimeBillers(country) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.axios.get(`${path}/billers/${country}`);
                return response.data;
            }
            catch (error) {
                return error;
            }
        });
    }
    GetAirtimeHistory() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.axios.get(path);
                return response.data;
            }
            catch (error) {
                return error;
            }
        });
    }
}
exports.default = Bills;
