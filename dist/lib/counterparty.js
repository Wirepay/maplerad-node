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
const path = "/counterparties";
class Counterparty {
    constructor(axios) {
        this.axios = axios;
    }
    Blacklist(counterpartyID, status) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.axios.post(`${path}/blacklist/${counterpartyID}`, {
                    blacklist: status,
                });
                return response.data;
            }
            catch (error) {
                return error;
            }
        });
    }
    GetCounterparty(counterpartyID) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.axios.get(`${path}/${counterpartyID}`);
                return response.data;
            }
            catch (error) {
                return error;
            }
        });
    }
    GetAllCounterparties() {
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
exports.default = Counterparty;
