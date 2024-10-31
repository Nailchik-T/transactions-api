import {Expose, Transform, Type} from "class-transformer";
import {
    IsNotEmpty,
    IsString,
    IsNumber,
    IsOptional,
    IsDate,
} from "class-validator";

export class TransactionDto {
    @Expose()
    @IsDate()
    @Type(() => Date)
    @IsNotEmpty()
    dateTime!: Date;

    @Expose()
    @IsString()
    @IsNotEmpty()
    author!: string;

    @Expose()
    @IsNumber()
    @IsNotEmpty()
    sum!: number;

    @Expose()
    @Transform(({value}) =>
        typeof value === "string" ? parseInt(value) : value,
    )
    @IsNumber()
    @IsNotEmpty()
    categoryId!: number;

    @Expose()
    @IsString()
    @IsOptional()
    comment?: string;
}
