import {DataSource, DataSourceOptions} from "typeorm";
import {SeederOptions} from "typeorm-extension";
import {Category} from "@/entities/category";
import {Transaction} from "@/entities/transactions";
import {env} from "@/env";

const options: DataSourceOptions & SeederOptions = {
    type: "mysql",
    host: "localhost",
    port: 3306,
    database: env.dbName,
    username: env.dbUser,
    password: env.dbPassword,
    synchronize: true,
    logging: true,
    entities: [Category, Transaction],
};
export const appDataSource = new DataSource(options);
