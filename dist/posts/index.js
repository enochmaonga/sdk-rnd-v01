"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Posts = void 0;
const base_1 = require("src/base");
const resource = "posts";
class Posts extends base_1.Base {
    getPostById(id) {
        return this.invoke(`/${resource}/${id}`);
    }
    getPosts() {
        return this.invoke(`/${resource}`);
    }
    createPost(newPost) {
        return this.invoke(`/${resource}`, {
            method: "POST",
            body: JSON.stringify(newPost),
        });
    }
}
exports.Posts = Posts;
