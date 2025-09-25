import { NextRequest } from "next/server";
import { movies } from "./db";

// export async function GET() {
//     return  Response.json(movies)
// }

export async function POST(req:Request){
    
    let movie=await req.json();  //Getting movies from request

    const newMovies={...movie};  //Destructuring all movies
    console.log(newMovies+".................");
    movies.push(newMovies)        //push newMovies into db.js

    return new Response(JSON.stringify(newMovies));
}

export async function GET(req:NextRequest){
    const searchParam=req.nextUrl.searchParams;
    const query=searchParam.get("query");

    const filterMovies=query
    ?movies.filter((m)=>m.name.toLowerCase().includes(query))
    :movies;

    return new Response(JSON.stringify(filterMovies));
}