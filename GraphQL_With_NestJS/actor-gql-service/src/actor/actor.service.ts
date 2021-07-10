import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Movie } from 'src/movie/entities/movie.entity';
import { MovieService } from 'src/movie/movie.service';
import { Repository } from 'typeorm';
import { ActorCreateDTO } from './dto/actor-create.input';
import { Actor } from './entities/actor.entity';

@Injectable()
export class ActorService {

    constructor(@InjectRepository(Actor) private actorRepository: Repository<Actor>,
    private movieService: MovieService)/*why MovieService inject? -> 01:08:00*/{
    }

    async findAll(): Promise<Actor[]>{
        return this.actorRepository.find();
    }

    async findOne(id: string) {
        return this.actorRepository.findOne(id)
    }

    async create(actor: ActorCreateDTO): Promise<Actor> {
        let act = this.actorRepository.create(actor);
        return this.actorRepository.save(act)
    }

    async getMovie(id: string): Promise<Movie> {
        return this.movieService.findOne(id)
    }
}
