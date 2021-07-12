import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateOwnerInput } from './dto/create-owner.input';
import { UpdateOwnerInput } from './dto/update-owner.input';
import { Owner } from './entities/owner.entity';

@Injectable()
export class OwnerService {

  constructor(@InjectRepository(Owner) private ownerRepository: Repository<Owner>,
  /*private petService: petService*/){}
  
  async create(createOwnerInput: CreateOwnerInput): Promise<Owner> {
    let owner = this.ownerRepository.create(createOwnerInput);
    return this.ownerRepository.save(owner)
  }

  async findAll(): Promise<Owner[]> {
    return this.ownerRepository.find();
  }

  async findOne(id: string): Promise<Owner> {
    return this.ownerRepository.findOne(id, {relations: ['pets']})
  }

  update(id: string, updateOwnerInput: UpdateOwnerInput) {
    let owner: Owner = this.ownerRepository.create(updateOwnerInput)
    owner.id = id;
    return this.ownerRepository.save(owner)
  }

  async remove(id: string) {
    let owner = this.findOne(id)
    if (owner) {
      let ret = await this.ownerRepository.delete(id)
      if (ret.affected === 1) {
        return owner;
      }
    }
    throw new NotFoundException(`Record cannot find by id ${id}`)
  }
}
