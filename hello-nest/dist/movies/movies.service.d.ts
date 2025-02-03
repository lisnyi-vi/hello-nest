import { Movie } from './entities/movies.entity';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto copy';
export declare class MoviesService {
    private movies;
    getAll(): Movie[];
    getOne(id: number): Movie;
    remove(id: number): void;
    create(movieData: CreateMovieDto): void;
    patch(id: number, updateData: UpdateMovieDto): void;
}
