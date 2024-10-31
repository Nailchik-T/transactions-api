import cors from "cors";
import App from "./app";
import logger from "./middlewares/logger.middleware";
import "reflect-metadata";
import {CategoryRoute} from "./routes/category/category.route";
import {TransactionRoute} from "./routes/transaction/transaction.route";

const app = new App({
    port: 8000,
    middlewares: [logger(), cors()],
    routers: [new CategoryRoute(), new TransactionRoute()],
});

app.listen();
