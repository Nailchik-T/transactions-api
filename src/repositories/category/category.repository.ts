import {Repository} from "typeorm";
import {appDataSource} from "@/config/dataSource";
import {Category} from "@/entities/category";
import {CategoryDto} from "@/dto/category/category.dto";

export class CategoryRepository extends Repository<Category> {
    constructor() {
        super(Category, appDataSource.createEntityManager());
    }
    async getCategories(): Promise<Category[]> {
        return await this.find();
    }

    async createCategory(categoryDto: CategoryDto) {
        return await this.save(categoryDto);
    }

    async checkCategory(categoryId: number): Promise<Category | null> {
        return await this.findOneBy({id: categoryId});
    }
}
