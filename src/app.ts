import * as express from "express";
import * as bodyParser from "body-parser";
import * as mongoose from "mongoose";
import {DB_HOST, DB_PORT, DB_NAME} from "./config";

class App {

    public app: express.Application;
    public mongoUrl: string = 'mongodb://'+ DB_HOST + ':' + DB_PORT +'/' + DB_NAME;

    constructor() {
        this.app = express();
        this.mongoSetup();
        this.config();
    }

    private config(): void{
        // support application/json type post data
        this.app.use(bodyParser.json());
        //support application/x-www-form-urlencoded post data
        this.app.use(bodyParser.urlencoded({ extended: false }));
    }

    private mongoSetup(): void{
        const options = {
            autoIndex: false, // Don't build indexes
            reconnectTries: Number.MAX_VALUE, // Never stop trying to reconnect
            reconnectInterval: 500, // Reconnect every 500ms
            poolSize: 10, // Maintain up to 10 socket connections
            // If not connected, return errors immediately rather than waiting for reconnect
            bufferMaxEntries: 0,
            connectTimeoutMS: 10000, // Give up initial connection after 10 seconds
            socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
            family: 4, // Use IPv4, skip trying IPv6,
            useNewUrlParser: true
        };
        mongoose.connect(this.mongoUrl, options, function (err: any) {

            if (err) {
                console.error('Failed to connect to mongo on startup - retrying in 3 sec', err);
                setTimeout(this.mongoSetup(), 3000);

            } else {
                console.log('Mongoose default connection open to ' + DB_NAME);
            }
        });
    }

}

export default new App().app;