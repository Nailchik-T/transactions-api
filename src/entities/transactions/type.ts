import { ICategory } from "../category/type";

export interface ITransaction {
    id: number;
    dateTime: string;
    author: string;
    sum: number;
    category: ICategory;
    comment?: string;
}
