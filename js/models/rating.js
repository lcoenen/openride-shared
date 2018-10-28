"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const link_1 = require("./link");
function isRating(x) {
    return [
        x.ride, x.from, x.to, x.rate
    ].filter((x) => x === undefined)
        .length == 0
        && link_1.isLink(x.ride)
        && link_1.isLink(x.from)
        && link_1.isLink(x.to);
}
exports.isRating = isRating;
//# sourceMappingURL=rating.js.map