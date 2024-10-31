import {CategoryDto} from "@/dto/category/category.dto";
import {CategoryRepository} from "@/repositories/category";

export class CategoryService {
    private repository: CategoryRepository;

    constructor() {
        this.repository = new CategoryRepository();
    }
    getCategories = async () => {
        return await this.repository.getCategories();
    };
    createCategory = async (categoryDto: CategoryDto) => {
        return await this.repository.createCategory(categoryDto);
    };
}
