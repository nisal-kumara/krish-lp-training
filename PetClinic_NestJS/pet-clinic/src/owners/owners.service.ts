import { Injectable, NotFoundException } from '@nestjs/common';
import { v1 as uuid } from 'uuid'
import { OwnerSearchDto } from './Owner-DTOs/OwnerSearch.dto';
import { OwnerUpdateDto } from './Owner-DTOs/OwnerUpdate.dto';
import { OwnerCreateDto } from './Owner-DTOs/OwnerCreate.dto';
import { Owner } from 'src/schemas/Owner.schema';
import { OwnerRepository } from './Owner.repository';

@Injectable()
export class OwnersService {

    constructor(private ownerRepository: OwnerRepository) { }

    async getAllOwners(): Promise<Owner[]> {
        return await this.ownerRepository.findAll();
    }

    async createOwner(ownerCreateDto: OwnerCreateDto): Promise<Owner> {
        //note -> video 04 -> 24:00
        return await this.ownerRepository.create(ownerCreateDto);
    }

    ownerSearch(ownerSearchDto: OwnerSearchDto) {
        return this.ownerRepository.filterOwners(ownerSearchDto);
    }

    getOwnerById(id: string): Promise<Owner> {

        let owner = this.ownerRepository.findById(id)
        //must watch -> video 03 -> 22:44
        if (!owner) {
            throw new NotFoundException(`${id} Is Not Exist`)
        }
        return owner;
    }

    updateOwner(ownerUpdateDto: OwnerUpdateDto): Promise<Owner> {
        return this.ownerRepository.update(ownerUpdateDto)
    }

    async deleteOwner(id: string): Promise<boolean> {
        let deleteO = await this.ownerRepository.delete(id);
        return deleteO;
    }
}
