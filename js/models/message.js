"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const hash_1 = require("../lib/hash");
function isMessage(x) {
    let is_message = [
        x.ride,
        x.author,
        x.message,
        x.date
    ].filter((x) => {
        return x == undefined;
    }).length == 0;
    return is_message;
}
exports.isMessage = isMessage;
function hashMessage(message) {
    return hash_1.hash(message.message, message.author, (new Date).toString()).substr(0, 6);
}
exports.hashMessage = hashMessage;
//# sourceMappingURL=message.js.map