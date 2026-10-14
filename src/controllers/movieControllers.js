import {prisma} from "../config/db.js";

const getAllMovies = async (req, res) => {
    try {
    const movies = await prisma.movie.findMany({
      select: {
        title: true,
        overview: true,
        releaseYear: true,
        genres: true,
        runtime: true,
        posterUrl: true
      }
    });

    res.status(200).json(movies);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}


const movieMethods = { getAllMovies };

export default movieMethods;

