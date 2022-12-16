"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Base = void 0;
const isomorphic_unfetch_1 = require("isomorphic-unfetch");
class Base {
    constructor(config) {
        this.apikey = config.apiKey;
        this.baseUrl = config.baseUrl || "https://jsonplaceholder.typicode.com";
    }
    invoke(endpoint, options) {
        const url = `${this.baseUrl}${endpoint}`;
        const headers = {
            "Content-Type": "application/json",
            "api-key": this.apikey
        };
        const config = Object.assign(Object.assign({}, options), { headers });
        return (0, isomorphic_unfetch_1.default)(url, config).then((response) => {
            if (response.ok) {
                return response.json();
            }
            else {
                throw new Error(response.statusText);
            }
        });
    }
}
exports.Base = Base;
