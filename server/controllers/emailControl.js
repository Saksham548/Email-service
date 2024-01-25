import email from "../models/email.js";

export const saveSent = (req, res) => {
  try {
    const Email = new email(req.body);
    Email.save();
    res.status(200).json("email saved");
  } catch (error) {
    res.status(500).json(error.message);
  }
};
