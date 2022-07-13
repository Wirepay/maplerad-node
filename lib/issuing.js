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
const path = "/issuing";
class Issuing {
    constructor(axios) {
        this.axios = axios;
    }
    CreateCard(payload) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.axios.post(`${path}`, payload);
                return response.data;
            }
            catch (error) {
                return error;
            }
        });
    }
    GetCard(cardID) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.axios.get(`${path}/${cardID}`);
                return response.data;
            }
            catch (error) {
                return error;
            }
        });
    }
    GetAllCards() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.axios.get(`${path}`);
                return response.data;
            }
            catch (error) {
                return error;
            }
        });
    }
    GetCardTransactions(cardID) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.axios.get("");
            }
            catch (error) {
                return error;
            }
        });
    }
    FundCard(cardID, amount) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.axios.post(`${path}/${cardID}/fund`, {
                    amount
                });
                return response.data;
            }
            catch (error) {
                return error;
            }
        });
    }
    WithdrawFromCard(cardID, amount) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.axios.post(`${path}/${cardID}/withdraw`, {
                    amount
                });
                return response.data;
            }
            catch (error) {
                return error;
            }
        });
    }
    EnableCard(cardID) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.axios.patch(`${path}/${cardID}/enable`);
                return response.data;
            }
            catch (error) {
                return error;
            }
        });
    }
    DisableCard(cardID) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.axios.patch(`${path}/${cardID}/disable`);
                return response.data;
            }
            catch (error) {
                return error;
            }
        });
    }
}
exports.default = Issuing;
