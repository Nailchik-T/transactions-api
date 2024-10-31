import {RequestHandler} from "express";
import {CategoryService} from "@/service/category";
import {CategoryDto} from "@/dto/category/category.dto";
import DtoManager from "@/helpers/dtoManager";

export class CategoryController {
    private service: CategoryService;

    constructor() {
        this.service = new CategoryService();
    }

    getAllCategories: RequestHandler = async (req, res) => {
        res.send(await this.service.getCategories());
    };

    createCategory: RequestHandler = async (req, res, next) => {
        try {
            const {dto} = await DtoManager.createDto(
                CategoryDto,
                {...req.body},
                {isValidate: true},
            );

            const category = await this.service.createCategory(dto);
            res.send(category);
        } catch (error) {
            next(error);
        }
    };
}
