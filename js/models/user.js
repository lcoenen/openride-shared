"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function isUser(x) {
    return [x.name,
        x._id,
        x.age,
        x.place_of_origin,
        x.reputation,
        x.email].filter((x) => {
        return x == undefined;
    }).length == 0;
}
exports.isUser = isUser;
function isCredentials(x) {
    return [x.login, x.password].filter((x) => {
        return x == undefined;
    }).length == 0;
}
exports.isCredentials = isCredentials;
function sanitize(user) {
    let newUser = Object.assign({}, user);
    delete newUser.password;
    return newUser;
}
exports.sanitize = sanitize;
//# sourceMappingURL=user.js.map