import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Owner, OwnerDocument } from "src/schemas/Owner.schema";
import { OwnerCreateDto } from "./OwnerCreate.dto";
import { OwnerSearchDto } from "./OwnerSearch.dto";
import { OwnerUpdateDto } from "./OwnerUpdate.dto";
import * as mongoose from 'mongoose'

@Injectable()
export class OwnerRepository {

    constructor(@InjectModel(Owner.name) private ownerModel: Model<OwnerDocument>) { }

    async create(ownerCreateDto: OwnerCreateDto): Promise<Owner> {

        let newOwner = new this.ownerModel(ownerCreateDto);
        return await newOwner.save();
    }

    async findAll(): Promise<Owner[]> {
        return await this.ownerModel.find();
    }

    async findById(id: string): Promise<Owner> {
        return await this.ownerModel.findOne({ _id: id })
    }

    async filterOwners(filter: OwnerSearchDto) {
        let name = Object.is(filter.name, undefined) ? '' : filter.name
        let reference = Object.is(filter.reference, undefined) ? '' : filter.reference
        return await this.ownerModel.find({ $and: [/*{ reference: { $regex: reference } },*/ { firstName: { $regex: name } }] })

    }

    async update(owner: OwnerUpdateDto): Promise<Owner> {
        return await this.ownerModel.findOneAndUpdate({ _id: owner.id },
            { mobile: owner.mobile }, {
            new: true
        })
    }

    async delete(id: string): Promise<boolean> {
        let objId = mongoose.Types.ObjectId(id)

        let del = await this.ownerModel.deleteOne({ _id: objId })
        return (del.n === 1)
    }
}