import {PrismaClient} from "@prisma/client";
import dotenv from "dotenv"
dotenv.config();


const prisma = new PrismaClient({
    log: process.env.NODE_ENV === "development" ? ["query", "error", "warn"] : ["error"],
});

const connectDB = async () => {
    try{
        await prisma.$connect();
        console.log("connected to database");
    }catch(error){
        console.log("error connecting to database", error);
        process.exit(1);
    }
}

const userID = "f040e22d-a57b-40bd-9df0-cd04be10b97d"; // admin

const movies = [
  {
    title: "Inception",
    overview: "A skilled thief enters people's dreams to steal secrets and is given a chance to erase his past.",
    releaseYear: 2010,
    genres: ["Sci-Fi", "Action", "Thriller"],
    runtime: 148,
    posterUrl: "https://image.tmdb.org/t/p/w500/oYuLEt3zVCKq57qu2F8dT7NIa6f.jpg",
    createdBy: userID
  },
  {
    title: "Interstellar",
    overview: "A team of astronauts travels through a wormhole to find a new home for humanity.",
    releaseYear: 2014,
    genres: ["Sci-Fi", "Drama", "Adventure"],
    runtime: 169,
    posterUrl: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
    createdBy: userID
  },
  {
    title: "The Dark Knight",
    overview: "Batman faces the Joker, a criminal mastermind who brings chaos to Gotham City.",
    releaseYear: 2008,
    genres: ["Action", "Crime", "Drama"],
    runtime: 152,
    posterUrl: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
    createdBy: userID
  },
  {
    title: "The Shawshank Redemption",
    overview: "A banker sentenced to life in prison builds an unexpected friendship and holds on to hope.",
    releaseYear: 1994,
    genres: ["Drama"],
    runtime: 142,
    posterUrl: "https://image.tmdb.org/t/p/w500/9cqNxx0GxF0bflZmeSMuL5tnGzr.jpg",
    createdBy: userID
  },
  {
    title: "The Matrix",
    overview: "A programmer discovers that reality is a simulation controlled by machines.",
    releaseYear: 1999,
    genres: ["Sci-Fi", "Action"],
    runtime: 136,
    posterUrl: "https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg",
    createdBy: userID
  },
  {
    title: "Avatar",
    overview: "A former Marine becomes involved in the struggle to protect an alien world's inhabitants.",
    releaseYear: 2009,
    genres: ["Sci-Fi", "Adventure", "Action"],
    runtime: 162,
    posterUrl: "https://image.tmdb.org/t/p/w500/kyeqWdyUXW608qlYkRqosgbbJyK.jpg",
    createdBy: userID
  },
  {
    title: "Titanic",
    overview: "Two young passengers from different social backgrounds fall in love aboard the Titanic.",
    releaseYear: 1997,
    genres: ["Romance", "Drama"],
    runtime: 195,
    posterUrl: "https://image.tmdb.org/t/p/w500/9xjZS2rlVxm8SFx8kPC3aIGCOYQ.jpg",
    createdBy: userID
  },
  {
    title: "Gladiator",
    overview: "A betrayed Roman general becomes a gladiator and seeks justice against the emperor.",
    releaseYear: 2000,
    genres: ["Action", "Drama", "Adventure"],
    runtime: 155,
    posterUrl: "https://image.tmdb.org/t/p/w500/ty8TGRuvJLPUmAR1H1nRIsgwvim.jpg",
    createdBy: userID
  },
  {
    title: "Joker",
    overview: "A struggling comedian descends into chaos as society repeatedly rejects him.",
    releaseYear: 2019,
    genres: ["Crime", "Drama", "Thriller"],
    runtime: 122,
    posterUrl: "https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
    createdBy: userID
  },
  {
    title: "Avengers: Endgame",
    overview: "The remaining Avengers unite to reverse the devastating consequences of Thanos's actions.",
    releaseYear: 2019,
    genres: ["Action", "Sci-Fi", "Adventure"],
    runtime: 181,
    posterUrl: "https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg",
    createdBy: userID
  },
  {
    title: "Parasite",
    overview: "A poor family gradually becomes entangled with a wealthy household through deception.",
    releaseYear: 2019,
    genres: ["Thriller", "Drama", "Comedy"],
    runtime: 132,
    posterUrl: "https://image.tmdb.org/t/p/w500/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg",
    createdBy: userID
  },
  {
    title: "Dangal",
    overview: "A former wrestler trains his daughters to compete in wrestling despite social expectations.",
    releaseYear: 2016,
    genres: ["Drama", "Sport", "Biography"],
    runtime: 161,
    posterUrl: "https://image.tmdb.org/t/p/w500/cJRPOLEexI7qp2DKtFfCh7YaaUG.jpg",
    createdBy: userID
  },
  {
    title: "3 Idiots",
    overview: "Three engineering students challenge academic pressure while discovering their own paths.",
    releaseYear: 2009,
    genres: ["Comedy", "Drama"],
    runtime: 170,
    posterUrl: "https://image.tmdb.org/t/p/w500/66A9MqXOyVFCssoloscw79z8Tew.jpg",
    createdBy: userID
  },
  {
    title: "Spider-Man: No Way Home",
    overview: "Peter Parker seeks help after his identity is revealed, causing the multiverse to collide.",
    releaseYear: 2021,
    genres: ["Action", "Adventure", "Sci-Fi"],
    runtime: 148,
    posterUrl: "https://image.tmdb.org/t/p/w500/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg",
    createdBy: userID
  },
  {
    title: "The Lion King",
    overview: "A young lion prince must overcome loss and reclaim his place as king.",
    releaseYear: 1994,
    genres: ["Animation", "Adventure", "Drama"],
    runtime: 88,
    posterUrl: "https://image.tmdb.org/t/p/w500/sKCr78MXSLixwmZ8DyJLrpMsd15.jpg",
    createdBy: userID
  }
];

const main = async () => {
    console.log("seeding movies ...");

    for(const movie of movies) {
        await prisma.movie.create({
            data : movie
        });
        console.log("movie added : ", movie.title);
    }

    console.log("seeding completed ...");
}

main().catch((err) => {
    console.error(err);
}).finally(() => {
    console.log("task done check your DB")
});