import bcrypt from "bcryptjs";

const hashPassGen = async (password) => {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
}

export default hashPassGen;