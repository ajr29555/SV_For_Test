import { useState } from "react";
import { Plus } from "lucide-react";
import { addMovie } from "@/lib/api";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select } from "@/components/ui/select";
import { Button } from "@/components/ui/button";

const GENRES = ["Sci-Fi", "Drama", "Action", "Thriller", "Comedy", "Horror", "Romance", "Documentary"];

export default function AddMovie() {
  const [title, setTitle] = useState("");
  const [genre, setGenre] = useState("");
  const [description, setDescription] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    if (title.length < 1 || title.length > 20) {
      alert("Title must be between 1 and 20 characters");
      return;
    }
    if (!genre) {
      alert("Genre is required");
      return;
    }
    if (description.length > 200) {
      alert("Description must be at most 200 characters");
      return;
    }
    const result = await addMovie({ title, genre, description });
    if (result.error) {
      alert(result.error);
      return;
    }
    setTitle("");
    setGenre("");
    setDescription("");
    alert("Movie added!");
  }

  return (
    <div>
      <h1 className="text-2xl font-bold">Add New Movie</h1>
      <p className="mt-1 text-sm text-gray-500">
        Fill in the details to add a movie to your watchlist.
      </p>

      <Card className="mt-6 max-w-2xl">
        <CardContent className="p-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label>Movie Title</Label>
              <Input
                placeholder="e.g. The Matrix"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <Label>Genre</Label>
              <Select value={genre} onChange={(e) => setGenre(e.target.value)}>
                <option value="">Select a genre</option>
                {GENRES.map((g) => (
                  <option key={g} value={g}>
                    {g}
                  </option>
                ))}
              </Select>
            </div>

            <div className="space-y-2">
              <Label>Short Description</Label>
              <Textarea
                placeholder="Brief summary of the movie..."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>

            <Button type="submit" className="w-full">
              <Plus className="h-4 w-4" />
              Add Movie
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
