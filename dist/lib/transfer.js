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
const path = "/transfers";
class Transfers {
    constructor(axios) {
        this.axios = axios;
    }
    NairaTransfer(payload) {
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
    DOMTransfer(payload) {
        return __awaiter(this, void 0, void 0, function* () {
            if (payload.meta.scheme !== "DOM")
                return "Invalid Scheme type for this method";
            try {
                const response = yield this.axios.post(path, payload);
                return response.data;
            }
            catch (error) {
                return error;
            }
        });
    }
    CashPickupTransfer(payload) {
        return __awaiter(this, void 0, void 0, function* () {
            if (payload.meta.scheme !== "CASHPICKUP")
                return "Invalid Scheme type for this method";
            try {
                const response = yield this.axios.post(path, payload);
                return response.data;
            }
            catch (error) {
                return error;
            }
        });
    }
    GetTransfer(transferID) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.axios.get(`${path}/${transferID}`);
                return response.data;
            }
            catch (error) {
                return error;
            }
        });
    }
    GetAllTransfers() {
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
exports.default = Transfers;
