import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateMovieInput } from './dto/create-movie.input';
import { UpdateMovieInput } from './dto/update-movie.input';
import { Movie } from './entities/movie.entity';

@Injectable()
export class MovieService {

  constructor(@InjectRepository(Movie) private movieRepository: Repository<Movie>){
  }

  create(movie: CreateMovieInput): Promise<Movie> {
    let mov = this.movieRepository.create(movie);
    return this.movieRepository.save(mov); //***note -> 48:40
  }

  async findAll(): Promise<Movie[]> {
    return this.movieRepository.find({
      relations: ['actors']
    });
  }

  async findOne(id: string): Promise<Movie> {
    return this.movieRepository.findOne(id, {relations: ['actors']})
  }

  update(id: string, updateMovieInput: UpdateMovieInput) {
    let movie: Movie = this.movieRepository.create(updateMovieInput)
    movie.id = id;
    return this.movieRepository.save(movie) 
  }

  async remove(id: string) {
     let mov = this.findOne(id)
    if (mov) {
      let ret = await this.movieRepository.delete(id)
      if (ret.affected === 1) {
        return mov;
      }
    }
    throw new NotFoundException(`Record cannot find by id ${id}`)
  }
}
