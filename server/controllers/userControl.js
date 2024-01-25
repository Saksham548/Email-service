import User from "../models/user";

const saveUser = async (userData) => {
  const newUser = new User(userData);

  try {
    const savedUser = await newUser.save();
    console.log("User saved to MongoDB:", savedUser);
    return savedUser;
  } catch (error) {
    console.error("Error saving user to MongoDB:", error.message);
    throw error;
  }
};

export default saveUser;
