import {Expose} from "class-transformer";
import {IsNotEmpty, IsString} from "class-validator";

export class CategoryDto {
    @Expose()
    @IsString()
    @IsNotEmpty()
    name!: string;
}
