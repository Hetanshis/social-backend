"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongodb_1 = require("mongodb");
function runMigration() {
    return __awaiter(this, void 0, void 0, function* () {
        const client = new mongodb_1.MongoClient('mongodb://localhost:27017', { retryWrites: true });
        try {
            yield client.connect();
            const database = client.db('social-api');
            const collection = database.collection('social-api');
            // Perform your migration logic here, e.g., add a new field
            yield collection.updateMany({}, { $set: { newField: 'default value' } });
            console.log('Migration completed successfully.');
        }
        finally {
            yield client.close();
        }
    });
}
runMigration();
