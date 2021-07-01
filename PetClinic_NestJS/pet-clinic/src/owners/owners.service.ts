import { Injectable, NotFoundException } from '@nestjs/common';
import { Owner } from './owner.model';
import { v1 as uuid } from 'uuid'
import { OwnerSearchDto } from './OwnerSearch.dto';
import { OwnerUpdateDto } from './OwnerUpdate.dto';
import { OwnerCreateDto } from './OwnerCreate.dto';

@Injectable()
export class OwnersService {

    private owners: Owner[] = [];

    getAllOwners() {
        return this.owners;
    }

    createOwner(ownerCreateDto: OwnerCreateDto) {
        const { firstName, lastName, email, mobile, refrenceNo } = ownerCreateDto

        const owner = {
            id: uuid(),
            firstName,
            lastName,
            email,
            mobile,
            refrenceNo
        }
        this.owners.push(owner);
        return owner;
    }

    ownerSearch(ownerSearchDto: OwnerSearchDto) {
        const { name, reference } = ownerSearchDto;
        let owners = this.getAllOwners();

        if (name) {
            owners = owners.filter(owner => owner.firstName.includes(name) || owner.lastName.includes(name))
        }
        if (reference) {
            owners = owners.filter(owner => String(owner.refrenceNo).includes(String(reference)))
        }
        return owners;
    }

    getOwnerById(id: string): Owner {
        const owners = this.getAllOwners();
        let owner = owners.find(owner => owner.id === id);
        //must watch -> video 03 -> 22:44
        if (!owner) {
            throw new NotFoundException(`${id} is Not Exist`)
        }
        return owner;
    }

    updateOwner(ownerUpdateDto: OwnerUpdateDto): Owner {
        const { id, mobile } = ownerUpdateDto
        //note -> video 02 -> 27:25
        let owner = this.getOwnerById(id);
        owner.mobile = mobile;
        return owner;
    }

    deleteOwner(id: string): boolean {
        let owners = this.getAllOwners();
        this.owners = owners.filter(owner => owner.id != id);
        return (owners.length != this.owners.length)
    }
}
