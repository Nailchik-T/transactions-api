import {
    Column,
    Entity,
    JoinColumn,
    ManyToOne,
    PrimaryGeneratedColumn,
} from "typeorm";
import {Category} from "../category";

@Entity("Transaction")
export class Transaction {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({type: "timestamp"})
    dateTime!: Date;

    @Column()
    author!: string;

    @Column({type: "decimal", precision: 10, scale: 2})
    sum!: number;

    @Column({name: "categoryId"})
    categoryId!: number;

    @ManyToOne(() => Category, (category) => category.id)
    @JoinColumn({name: "categoryId"})
    category?: Category;

    @Column({nullable: true})
    comment?: string;
}
