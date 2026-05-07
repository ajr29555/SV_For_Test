import { useEffect, useState } from "react";
import { getMovies, deleteMovie } from "@/lib/api";
import { MovieCard } from "@/components/MovieCard";

export default function AllMovies() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getMovies().then(setMovies);
  }, []);

  async function handleDelete(id) {
    await deleteMovie(id);
    setMovies(movies.filter((m) => m._id !== id));
  }

  return (
    <div>
      <h1 className="text-2xl font-bold">All Movies</h1>
      <p className="mt-1 text-sm text-gray-500">
        {movies.length} movies in your watchlist
      </p>

      <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {movies.map((movie) => (
          <MovieCard key={movie._id} movie={movie} onDelete={handleDelete} />
        ))}
      </div>
    </div>
  );
}
