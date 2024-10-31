import {appDataSource} from "@/config/dataSource";
import {TransactionDto} from "@/dto/transaction/transaction.dto";
import {Transaction} from "@/entities/transactions";
import {Repository} from "typeorm";

export class TransactionRepository extends Repository<Transaction> {
    constructor() {
        super(Transaction, appDataSource.createEntityManager());
    }
    async getAllTransactions() {
        return await this.find({
            relations: {
                category: true,
            },
        });
    }

    async createTransaction(transactionDto: TransactionDto) {
        return await this.save(transactionDto);
    }
}
