import { Field, InputType, Int } from "@nestjs/graphql";
import { IsAlpha, IsInt, IsOptional, IsString } from "class-validator";

@InputType()
export class CreatePetInputDTO {
    @IsString()
    @Field()
    name: string
    
    @IsAlpha()
    @IsOptional()
    @Field({nullable: true})
    type?: string
}

@InputType()
export class FindOnePetInputDTO {
    @IsInt()
    @Field(type => Int)
    id: number
}