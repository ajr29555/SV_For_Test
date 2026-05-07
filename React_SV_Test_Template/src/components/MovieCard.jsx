import { Trash2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export function MovieCard({ movie, onDelete }) {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-start justify-between gap-2">
          <CardTitle>{movie.title}</CardTitle>
          <Badge>{movie.genre}</Badge>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-gray-600">{movie.description}</p>
      </CardContent>
      <CardFooter>
        <Button
          variant="destructive"
          className="w-full"
          onClick={() => onDelete(movie._id)}
        >
          <Trash2 className="h-4 w-4" />
          Delete Movie
        </Button>
      </CardFooter>
    </Card>
  );
}
