import { MovieCard } from "./MovieCard";
import { MovieProps } from "../App";
interface ContentProps {
  movies: MovieProps[]
}

export function Content(props: ContentProps) {
  return (
    <div className="movies-list">
      {props.movies.map(movie => (
        <MovieCard key={movie.imdbID} title={movie.Title} poster={movie.Poster} runtime={movie.Runtime} rating={movie.Ratings[0].Value} />
      ))}
    </div>
  )
}