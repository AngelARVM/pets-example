import { CreatePetInputDTO, FindOnePetInputDTO } from './pets.dto';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Pet } from './pet.entity';

@Injectable()
export class PetsService {
    constructor(@InjectRepository(Pet) private petsRepository: Repository<Pet>){}

    async findAll(): Promise<Pet[]> {
        return this.petsRepository.find()
    }

    async findOne(findOneInput: FindOnePetInputDTO): Promise<Pet> {
        return this.petsRepository.findOne(findOneInput)
    }

    async createPet(createPetInput: CreatePetInputDTO): Promise<Pet> {
        const newPet = this.petsRepository.create(createPetInput) 
        return this.petsRepository.save(newPet)
    }
}
