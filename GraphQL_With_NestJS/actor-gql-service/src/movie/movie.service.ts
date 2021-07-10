import { Injectable } from '@nestjs/common';
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
    return this.movieRepository.find()
  }

  async findOne(id: string): Promise<Movie> {
    return this.movieRepository.findOne(id)
  }

  update(id: string, updateMovieInput: UpdateMovieInput) {
    return `This action updates a #${id} movie`;
  }

  remove(id: number) {
    return `This action removes a #${id} movie`;
  }
}
