import {CategoryController} from "@/controllers/category";
import {IRoute} from "@/interfaces/IRoute.interface";
import {Router} from "express";

export class CategoryRoute implements IRoute {
    public path = "/transactions";
    router: Router = Router();
    private controller: CategoryController;

    constructor() {
        this.controller = new CategoryController();
        this.init();
    }
    private init() {
        this.router.get("/categories", this.controller.getAllCategories);
        this.router.post("/categories", this.controller.createCategory);
    }
}
