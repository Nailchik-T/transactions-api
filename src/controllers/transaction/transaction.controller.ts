import {RequestHandler} from "express";
import {TransactionService} from "@/service/transaction/transaction.service";
import {TransactionDto} from "@/dto/transaction/transaction.dto";
import {ApiError} from "@/helpers/apiError";
import DtoManager from "@/helpers/dtoManager";

export class TransactionController {
    private service: TransactionService;

    constructor() {
        this.service = new TransactionService();
    }

    getAllTransactions: RequestHandler = async (req, res) => {
        res.send(await this.service.getAllTransactions());
    };

    createTransaction: RequestHandler = async (req, res, next) => {
        try {
            const categoryId = req.body.categoryId;
            const checkCategory = await this.service.checkCategory(categoryId);
            if (!checkCategory)
                throw ApiError.NotFound(
                    "Не правильный id категории! Попробуйте ещё раз.",
                );

            const {dto} = await DtoManager.createDto(
                TransactionDto,
                {...req.body},
                {isValidate: true},
            );

            const transaction = await this.service.createTransaction(dto);
            res.send(transaction);
        } catch (e) {
            next(e);
        }
    };
}
