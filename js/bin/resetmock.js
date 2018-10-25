#! /usr/bin/ts-node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const es6_promise_1 = require("es6-promise");
const mongodb_1 = require("mongodb");
const redis = require("redis");
const config_1 = require("../../server/app/config/config");
const user_1 = require("../mocks/user");
const ride_1 = require("../mocks/ride");
const message_1 = require("../mocks/message");
const prospects_1 = require("../mocks/prospects");
/*
 *
 *	This will reset the mocks inside the datebase and apply the right indexes
 *
 */
function resetMock() {
    return mongodb_1.MongoClient.connect(config_1.settings.mongoUrl, { useNewUrlParser: true }).then((client) => {
        let db = client.db(config_1.settings.dbName);
        return es6_promise_1.Promise.all([
            db.collection('users').drop(),
            db.collection('rides').drop(),
            db.collection('prospects').drop(),
            db.collection('messages').drop()
        ])
            .catch((err) => {
            // console.info(`Error while dropping the collections. ${ err.message }`); 
        }).then(() => {
            return db.collection('users').insertMany(user_1.UsersMock);
        }).then(() => {
            /*
             *
             *	This will create the geographical indexes needed to do a
             *	proximity research.
             *
             *	See https://docs.mongodb.com/manual/core/2dsphere/
             *
             */
            db.collection('rides').createIndex({ 'destination.geometry': "2dsphere" });
            db.collection('rides').createIndex({ 'origin.geometry': "2dsphere" });
            return db.collection('rides').insertMany(ride_1.RidesMock);
        }).then(() => {
            return db.collection('prospects').insertMany(prospects_1.ProspectsMock);
        }).then(() => {
            return db.collection('messages').insertMany(message_1.MessagesMock);
        }).then(() => {
            /*
             *
             *	This will create an index on name so that no user will have the same name
             *
             */
            db.collection('users').createIndex({ name: 1 }, { unique: true });
        }).catch((err) => {
            console.log(`Error while inserting the mocked collection: ${err.message}`);
        });
    }).then(() => {
        return new es6_promise_1.Promise((accept, reject) => {
            let redis_client = redis.createClient();
            redis_client.flushdb((err) => {
                if (err)
                    reject(err);
                else
                    accept();
            });
        });
    }).catch((error) => {
        console.error('I could not flush the redis server', error);
    });
}
exports.resetMock = resetMock;
if (require.main === module) {
    resetMock().then(() => {
        console.log(`INFO: Mock inserted inside database`);
        process.exit();
    }).catch((err) => {
        console.log(`ERROR: I could not insert the mocks. ${err}`);
        process.exit();
    });
}
//# sourceMappingURL=resetmock.js.map