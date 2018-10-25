"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const link_1 = require("./link");
/*
 *
 * This will be the type of the prospect
 *
 * - INVITE means the driver invite a rider. Thus, the 'ride'
 * 	 will be an request and 'with' the ride proposition.
 * - APPLY means the rider apply to join a ride. Thus, the 'ride' propety
 * 	 will target an offer and the 'with' a request
 *
 */
var ProspectType;
(function (ProspectType) {
    ProspectType[ProspectType["INVITE"] = 0] = "INVITE";
    ProspectType[ProspectType["APPLY"] = 1] = "APPLY";
})(ProspectType = exports.ProspectType || (exports.ProspectType = {}));
;
/*
 *
 * This is a typeguard that check that an object is of
 * type Prospect
 *
 */
function isProspect(x) {
    return link_1.isLink(x.ride) && link_1.isLink(x.with);
}
exports.isProspect = isProspect;
//# sourceMappingURL=prospect.js.map