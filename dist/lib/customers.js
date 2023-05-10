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
const path = "/customers";
class Customers {
    constructor(axios) {
        this.axios = axios;
    }
    FullEnrollCustomer(payload) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.axios.post(`${path}/enroll`, payload);
                return response.data;
            }
            catch (error) {
                return error;
            }
        });
    }
    CreateCustomer(payload) {
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
    UpgradeCustomerTier1(payload) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.axios.patch(`${path}/upgrade/tier1`, payload);
                return response.data;
            }
            catch (error) {
                return error;
            }
        });
    }
    UpgradeCustomerTier2(payload) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.axios.patch(`${path}/upgrade/tier2`, payload);
                return response.data;
            }
            catch (error) {
                return error;
            }
        });
    }
    GetCustomer(customerID) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.axios.get(`${path}/${customerID}`);
                return response.data;
            }
            catch (error) {
                return error;
            }
        });
    }
    GetAllCustomers() {
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
    GetCustomerCards(customerID) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.axios.get(`${path}/${customerID}/cards`);
                return response.data;
            }
            catch (error) {
                return error;
            }
        });
    }
    GetCustomerTransactions(customerID) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.axios.get(`${path}/${customerID}/transactions`);
                return response.data;
            }
            catch (error) {
                return error;
            }
        });
    }
    GetCustomerVirtualAccounts(customerID) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.axios.get(`${path}/${customerID}/virtual-account`);
                return response.data;
            }
            catch (error) {
                return error;
            }
        });
    }
    CustomerCardEnrollment(customerID, brand) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.axios.patch(`${path}/card-enroll`, {
                    customer_id: customerID,
                    brand,
                });
                return response.data;
            }
            catch (error) {
                return error;
            }
        });
    }
    UpdateCustomer(payload) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.axios.patch(`${path}/update`, payload);
                return response.data;
            }
            catch (error) {
                return error;
            }
        });
    }
    SetCustomerBlacklistActive(customerID, status) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.axios.post(`${path}/${customerID}/active`, {
                    blacklist: status,
                });
                return response.data;
            }
            catch (error) {
                return error;
            }
        });
    }
}
exports.default = Customers;
