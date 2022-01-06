"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
var express_1 = require("express");
function requireAuth(req, res, next) {
    if (req.session && req.session.loggedIn) {
        next();
        return;
    }
    res.status(403);
    res.send('Not permitted');
}
var router = (0, express_1.Router)();
exports.router = router;
router.post('/login', function (req, res) {
    var _a = req.body, email = _a.email, password = _a.password;
    if (email && password && email === "hello@gmail.com" && password === '123456') {
        // marked logedin
        req.session = { loggedIn: true };
        // redirect to the root dir
        res.redirect('/');
    }
    else {
        res.send('Invalid email or password');
    }
});
router.get('/', function (req, res) {
    if (req.session && req.session.loggedIn) {
        res.send("\n      <div>\n        <div>You are loggedIn</div>\n        <a href=\"/logout\">Logout</a>\n      </div>\n    ");
    }
    else {
        res.send("\n    <div>\n      <div>You are noot loggedIn</div>\n      <a href=\"/login\">LogIn</a>\n    </div>\n  ");
    }
});
router.get('/logout', function (req, res) {
    req.session = undefined;
    res.redirect('/');
});
router.get('/protected', requireAuth, function (req, res) {
    res.send('Welcome to protected route, logged in user');
});
