import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ActorCreateDTO } from './dto/actor-create.input';
import { Actor } from './entities/actor.entity';

@Injectable()
export class ActorService {

    constructor(@InjectRepository(Actor) private actorRepository: Repository<Actor>){

    }

    async findAll(): Promise<Actor[]>{
        return this.actorRepository.find();
    }

    // async findOne(id: string) {
    //     return this.actorRepository.findOne(id)
    // }

    async create(actor: ActorCreateDTO): Promise<Actor> {

        let act = this.actorRepository.create(actor);
        return this.actorRepository.save(act)

    }

    // async getProject(id: string): Promise<Project> {
    //     return this.projectService.findOne(id)
    // }
}
