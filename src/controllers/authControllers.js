import { prisma } from "../config/db.js";
import hashPassGen from "../utils/passHash.js";

const register = async (req, res) => {
    const { name, email, password } = req.body;
    const userExists = await prisma.User.findUnique({
        where: {email: email}
    })

    if(userExists) {
        res.send("user already exists");
    }

    // hashing pass
    const hashedPass = await hashPassGen(password);

    //creating a user
    const user = await prisma.user.create({
        data : {
            name,
            email,
            password : hashedPass
        }
    });
    res.status(200).json({user, "message" : "user created"});
};

const authMethod = { register };

export default authMethod;