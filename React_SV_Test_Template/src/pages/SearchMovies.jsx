import { useEffect, useState } from "react";
import { Search } from "lucide-react";
import { searchMovies, deleteMovie } from "@/lib/api";
import { Input } from "@/components/ui/input";
import { MovieCard } from "@/components/MovieCard";

export default function SearchMovies() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  useEffect(() => {
    if (!query) {
      setResults([]);
      return;
    }
    searchMovies(query).then(setResults);
  }, [query]);

  async function handleDelete(id) {
    await deleteMovie(id);
    setResults(results.filter((m) => m._id !== id));
  }

  return (
    <div>
      <h1 className="text-2xl font-bold">Search Movie</h1>
      <p className="mt-1 text-sm text-gray-500">
        Search by title, genre, or description.
      </p>

      <div className="relative mt-6 max-w-2xl">
        <Search className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-gray-400" />
        <Input
          className="pl-9"
          placeholder="Search..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>

      {query && (
        <p className="mt-4 text-sm text-gray-600">
          {results.length} result{results.length === 1 ? "" : "s"} for "{query}"
        </p>
      )}

      <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {results.map((movie) => (
          <MovieCard key={movie._id} movie={movie} onDelete={handleDelete} />
        ))}
      </div>
    </div>
  );
}
