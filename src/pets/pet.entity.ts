import { Entity, Column, PrimaryGeneratedColumn} from 'typeorm'
import { ObjectType, Field, Int } from '@nestjs/graphql'


@Entity()
@ObjectType()
export class Pet {
    @PrimaryGeneratedColumn()
    @Field(type => Int)
    id: number

    @Column()
    @Field()
    name: string

    @Column({nullable: true})
    @Field({nullable: true})
    type?: string
}