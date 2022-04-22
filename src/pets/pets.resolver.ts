import { CreatePetInputDTO, FindOnePetInputDTO } from './pets.dto';
import { PetsService } from './pets.service';
import { Pet } from './pet.entity';
import { Resolver, Query, Mutation, Args,Int } from '@nestjs/graphql';

@Resolver(of => Pet)
export class PetsResolver {
    constructor(private petsService:PetsService) {}
    
    @Query(returns => [Pet])
    async pets (): Promise<Pet[]> {
        return this.petsService.findAll()
    }

    @Query(returns => Pet)
    async findPet(@Args('findOneInput', {type: () => Int}) findOneInput: FindOnePetInputDTO): Promise<Pet | null>{
        return this.petsService.findOne(findOneInput)
    } 

    @Mutation(returns => Pet)
    async pet(@Args('createPetInput') createPetInput: CreatePetInputDTO): Promise<Pet>{
        return this.petsService.createPet(createPetInput)
    }
}
