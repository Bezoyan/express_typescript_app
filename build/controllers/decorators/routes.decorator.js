"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.del = exports.patch = exports.put = exports.post = exports.get = void 0;
require("reflect-metadata");
var methods_decorator_1 = require("./methods.decorator");
var metadataKeys_decorator_1 = require("./metadataKeys.decorator");
function routeBinder(method) {
    return function (path) {
        return function (target, key, desc) {
            Reflect.defineMetadata(metadataKeys_decorator_1.MetadataKeys.path, path, target, key);
            Reflect.defineMetadata(metadataKeys_decorator_1.MetadataKeys.method, method, target, key);
        };
    };
}
exports.get = routeBinder(methods_decorator_1.Methods.get);
exports.post = routeBinder(methods_decorator_1.Methods.post);
exports.put = routeBinder(methods_decorator_1.Methods.put);
exports.patch = routeBinder(methods_decorator_1.Methods.patch);
exports.del = routeBinder(methods_decorator_1.Methods.del);
