const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3000";

export async function getMovies() {
  const res = await fetch(`${API_URL}/movies`);
  return res.json();
}

export async function addMovie(movie) {
  const res = await fetch(`${API_URL}/movies`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(movie),
  });
  return res.json();
}

export async function deleteMovie(id) {
  const res = await fetch(`${API_URL}/movies/${id}`, { method: "DELETE" });
  return res.json();
}

export async function searchMovies(name) {
  const res = await fetch(`${API_URL}/movies/search?name=${encodeURIComponent(name)}`);
  return res.json();
}
