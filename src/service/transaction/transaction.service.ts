import {TransactionDto} from "@/dto/transaction/transaction.dto";
import {CategoryRepository} from "@/repositories/category";
import {TransactionRepository} from "@/repositories/transaction";

export class TransactionService {
    private repository: TransactionRepository;
    private categoryRepository: CategoryRepository;

    constructor() {
        this.repository = new TransactionRepository();
        this.categoryRepository = new CategoryRepository();
    }

    getAllTransactions = async () => {
        return await this.repository.getAllTransactions();
    };

    checkCategory = async (categoryId: number) => {
        return await this.categoryRepository.checkCategory(categoryId);
    };

    createTransaction = async (transactionDto: TransactionDto) => {
        return await this.repository.createTransaction(transactionDto);
    };
}
