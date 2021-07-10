import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { MovieService } from './movie.service';
import { Movie } from './entities/movie.entity';
import { CreateMovieInput } from './dto/create-movie.input';
import { UpdateMovieInput } from './dto/update-movie.input';

@Resolver(() => Movie)
export class MovieResolver {
  constructor(private readonly movieService: MovieService) {}

  @Mutation(() => Movie)
  createMovie(@Args('movie') movie: CreateMovieInput) {
    return this.movieService.create(movie);
  }

  @Query(() => [Movie], { name: 'getAllMovies' })
  findAll() {
    return this.movieService.findAll();
  }

  @Query(() => Movie, { name: 'movie' })
  findOne(@Args('id') id: string) {
    return this.movieService.findOne(id);
  }

  @Mutation(() => Movie)
  updateMovie(@Args('movie') movie: UpdateMovieInput) {
    return this.movieService.update(movie.id, movie);
  }

  @Mutation(() => Movie)
  removeMovie(@Args('id', { type: () => Int }) id: number) {
    return this.movieService.remove(id);
  }
}
