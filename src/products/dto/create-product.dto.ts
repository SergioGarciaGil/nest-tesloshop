
import { IsArray, IsIn, IsInt, IsNumber, IsOptional, IsPositive, IsString, MinLength }
    from "class-validator";


export class CreateProductDto {
    @IsString()
    @MinLength(1)
    title: string;
    @IsNumber()
    @IsPositive()
    @IsOptional()
    price?: number;

    @IsString()
    @IsOptional()
    dscription?: String

    @IsString()
    @IsOptional()
    slug?: string;

    @IsInt()
    @IsPositive()
    stock?: number;

    @IsString({ each: true })
    @IsArray()
    sizes: string[];
}

