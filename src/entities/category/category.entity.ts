import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";
import {ICategory} from "./type";

@Entity("Category")
export class Category implements ICategory {
    @PrimaryGeneratedColumn()
    id!: number;
    @Column()
    name!: string;
}
