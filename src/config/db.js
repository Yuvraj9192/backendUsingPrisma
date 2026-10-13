import { PrismaClient } from "@prisma/client";
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

// const disconnectDB = async () => {
//     await prisma.$disconnect();
// }

// export {connectDB, disconnectDB, prisma};
export {connectDB,  prisma};