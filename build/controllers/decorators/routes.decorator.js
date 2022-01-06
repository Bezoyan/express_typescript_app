"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.remove = exports.put = exports.post = exports.get = void 0;
require("reflect-metadata");
function routeBinder(method) {
    return function (path) {
        return function (target, key, desc) {
            Reflect.defineMetadata('path', path, target, key);
            Reflect.defineMetadata('method', method, target, key);
        };
    };
}
exports.get = routeBinder('get');
exports.post = routeBinder('post');
exports.put = routeBinder('put');
exports.remove = routeBinder('delete');
