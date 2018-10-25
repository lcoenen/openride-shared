"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const hash_1 = require("../lib/hash");
var RideType;
(function (RideType) {
    RideType[RideType["REQUEST"] = 0] = "REQUEST";
    RideType[RideType["OFFER"] = 1] = "OFFER";
})(RideType = exports.RideType || (exports.RideType = {}));
;
/*
 *
 * This will represent the different payement philosophy
 *
 */
var PayementPhilosophy;
(function (PayementPhilosophy) {
    PayementPhilosophy[PayementPhilosophy["FREE"] = 0] = "FREE";
    PayementPhilosophy[PayementPhilosophy["PART"] = 1] = "PART";
    PayementPhilosophy[PayementPhilosophy["REFUNDED"] = 2] = "REFUNDED";
    PayementPhilosophy[PayementPhilosophy["PAID"] = 3] = "PAID";
})(PayementPhilosophy = exports.PayementPhilosophy || (exports.PayementPhilosophy = {}));
/*
 *
 * This function is a typeguard to check if it's a ride
 *
 */
function isRide(x) {
    let is_ride = [
        x.origin,
        x.destination,
        x.riding_time,
        x.type
    ].filter((x) => {
        return x == undefined;
    }).length == 0;
    return is_ride;
}
exports.isRide = isRide;
/*
 *
 * Hash a ride.
 *
 * This function will return an unique string for the ride.
 * It is used to compute an ID for the ride inside MongoDB
 *
 */
function hashRide(ride) {
    return hash_1.hash(ride.origin.properties.address, ride.destination.properties.address, ride.payement, (new Date).toString()).substr(0, 6);
}
exports.hashRide = hashRide;
//# sourceMappingURL=ride.js.map