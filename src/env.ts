import * as process from "process";
import {config} from "dotenv";

config();

export type IConfig = {
    dbUser: string;
    dbPassword: string;
    dbName: string;
};

export const env: IConfig = {
    dbUser: process.env.DB_USER || "root",
    dbPassword: process.env.DB_PASSWORD || "root",
    dbName: process.env.DB_NAME || "transactions",
};
