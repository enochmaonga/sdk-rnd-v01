"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_1 = require("./base");
const posts_1 = require("./posts");
const utils_1 = require("./utils");
class Typicode extends base_1.Base {
}
(0, utils_1.applyMixins)(Typicode, [posts_1.Posts]);
exports.default = Typicode;
