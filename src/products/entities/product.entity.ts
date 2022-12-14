import { IsOptional } from "class-validator";
import { BeforeInsert, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Product {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column('text', {
        unique: true,
    })
    title: string;

    @Column('numeric', {
        default: 0
    })
    price: number;

    @Column('text', {
        nullable: true
    })
    description: string;

    @Column('text', {

    })
    @IsOptional()
    slug?: string;

    @Column('int', {
        default: 0
    })
    stock: number

    @Column('text', {
        array: true
    })
    sizes: string[]

    @BeforeInsert()
    checkSlugInsert() {
        if (!this.slug) {
            this.slug = this.title
        }
        this.slug = this.slug
            .toLowerCase()
            .replaceAll(' ', '_')
            .replaceAll("'", "")

    }

}

