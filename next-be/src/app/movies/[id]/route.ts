import { error } from "console";
import { movies } from "../db";

export async function GET(
  _req: Request,
  { params }: { params: { id: string } }
) {
  const { id } = await params;
  const movie = movies.find((m) => m.id === Number(id));
  return movie
    ? new Response(JSON.stringify(movie))
    : new Response("Movie not found", { status: 404 });
}

export async function PATCH(req: Request, { params }: { params: { id: string } }) {
  const { id } = params;
  const movieId = Number(id);
  //Check that the movie is exist or not
  const movie = movies.find((m) => m.id == movieId);
  if (!movie) {
    return new Response(
      JSON.stringify({ error: `Movie not found for movieId:${movieId}` }),
      { status: 404 }
    );
  }

  try {
    const updateMovie = await req.json();
    const index = movies.findIndex((m) => m.id === movieId);

    if (!movie) {
      return new Response(
        JSON.stringify({ error: `Movie not found for movieId:${movieId}` }),
        { status: 404 }
      );
    }
        //Update The movie
    movies[index] = { ...movie, ...updateMovie };

    return new Response(JSON.stringify(movies[index]),{status:200})
  } catch (err) {
    return new Response(JSON.stringify({ err: "Failed to parse JSON" }));
  }
}
