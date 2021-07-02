import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Pet, PetDocument } from "src/schemas/Pet.schema";
import { PetCreateDto } from "./PetCreate.dto";
import * as mongoose from 'mongoose'
import { PetSearchDto } from "./petSearch.dto";
import { PetUpdateDto } from "./PetUpdate.dto";

@Injectable()
export class PetRepository {

    constructor(@InjectModel(Pet.name) private petModel: Model<PetDocument>) { }

    async create(petCreateDto: PetCreateDto): Promise<Pet> {

        let newPet = new this.petModel(petCreateDto);
        return await newPet.save();
    }

    async findAll(): Promise<Pet[]> {
        return await this.petModel.find();
    }

    async findById(id: string): Promise<Pet> {
        return await this.petModel.findOne({ _id: id })
    }

    async filterPets(filter: PetSearchDto) {
        let breed = Object.is(filter.breed, undefined) ? '' : filter.breed
        let type = Object.is(filter.type, undefined) ? '' : filter.type
        return await this.petModel.find({ $and: [{ Petbreed: { $regex: breed } }, /*{ PetType: { $regex: type } }*/] })

    }

    async update(pet: PetUpdateDto): Promise<Pet> {
        return await this.petModel.findOneAndUpdate({ _id: pet.id },
            { petName: pet.name }, {
            new: true
        })
    }

    async delete(id: string): Promise<boolean> {
        let objId = mongoose.Types.ObjectId(id)

        let del = await this.petModel.deleteOne({ _id: objId })
        return (del.n === 1)
    }
}