import {TransactionController} from "@/controllers/transaction";
import {IRoute} from "@/interfaces/IRoute.interface";
import {Router} from "express";

export class TransactionRoute implements IRoute {
    public path = "/transactions";
    router: Router = Router();
    private controller: TransactionController;

    constructor() {
        this.controller = new TransactionController();
        this.init();
    }
    private init() {
        this.router.get("/", this.controller.getAllTransactions);
        this.router.post("/", this.controller.createTransaction);
    }
}
