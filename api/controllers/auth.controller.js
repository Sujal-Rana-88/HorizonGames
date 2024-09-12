import bcrypt from "bcrypt";
import prisma from "../lib/prisma.js";
import jwt from "jsonwebtoken";

export const register = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    //! Check if the email or username already exists
    const existingUser = await prisma.user.findFirst({
      where: {
        OR: [
          { email: email },
          { userName: username }
        ]
      }
    });

    //! If user already exists, return an error message
    if (existingUser) {
      return res.status(400).json({ error: "Username or email already exists" });
    }

    // Hash the password
    const hashPassword = await bcrypt.hash(password, 10);

    // Create new user
    const newUser = await prisma.user.create({
      data: {
        userName: username,
        email,
        password: hashPassword,
      },
    });

    console.log(newUser);
    res.status(201).json(newUser); // Send response
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred during registration." });
  }
};
export const login = async (req, res) => {
  const { username, password } = req.body;
  try {
    // CHECK IF USER EXISTS
    const user = await prisma.user.findUnique({
      where: { userName: username }, // Use userName as per schema
    });

    if (!user) return res.status(401).json({ message: "Invalid Credentials" });

    // CHECK IF PASSWORD IS CORRECT
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid)
      return res.status(401).json({ message: "Invalid Credentials" });

    // GENERATE COOKIE TOKEN AND SEND TO USER

    //Create a age fro week
    const age = 1000 * 60 * 60 * 24 * 7;

    const token = jwt.sign(
      {
        id: user.id,
      },
      process.env.JWT_SECRET_KEY,
      { expiresIn: age }
    );


    res
      .cookie("token", token, {
        httpOnly: true,
        //secure: true // TODO: turn it true for production code
        maxAge: age,
      })
      .status(200)
      .json({ message: "Login successful" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Failed to Login" });
  }
};

export const logout = (req, res) => {
  res.clearCookie("token").status(200).json({message: "Logout Succesfully"})
};
 