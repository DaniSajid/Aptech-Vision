import { User } from "../models/user.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
const registerUser = async (req, res) => {
    const { name, email, password, cPassword } = req.body;

    if (!(name && email && password && cPassword)) {
        return res.status(400).send({ message: "All fields are required" });
    }

    if (password !== cPassword) {
        return res.status(400).send({ message: "Passwords do not match" });
    }

    const userAlreadyExist = await User.findOne({ email });
    if (userAlreadyExist) {
        return res.status(400).send({ message: "User already exists" });
    }

    const hashPass = await bcrypt.hash(password, 10);

    const saveUser = await User.create({
        name,
        email,
        password: hashPass,
        cPassword: hashPass,
        isVerified: false,
    });

    // Generate token with the correct payload
    const token = jwt.sign({ user_id: saveUser._id, email }, process.env.TOKEN_SECRET_KEY, { expiresIn: "2h" });
    saveUser.token = token;

    return res.status(201).send({ message: "User created successfully", user: saveUser,token });
};

export { registerUser };