"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.controller = void 0;
require("reflect-metadata");
var appRouter_1 = require("../../appRouter");
function controller(routePrefix) {
    return function (target) {
        var router = appRouter_1.AppRouter.getInstance();
        for (var key in target.prototype) {
            var routeHandler = target.prototype[key];
            var path = Reflect.getMetadata('path', target.prototype, key);
            if (path) {
                router.get("".concat(routePrefix).concat(path), routeHandler);
            }
        }
    };
}
exports.controller = controller;
