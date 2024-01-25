import express from "express";
import Connection from "./database/db.js";
import routes from "./routes/route.js";
import cors from "cors";
import User from "./models/user.js";
import email from "./models/email.js";

const app = express();

Connection();

const PORT = 8000;

app.use(cors());
app.use(express.urlencoded());
app.use(express.json());

app.use("/", routes);

app.post("/signup", async (req, res) => {
  const { firstName, lastName, email, password } = req.body;
  const user = await User.create({
    firstname: firstName,
    lastname: lastName,
    email: email,
    password: password,
  });
});
app.get("/mails", async (req, res) => {
  try {
    const emails = await email.find();
    return res.json(emails);
  } catch (e) {
    console.log(e);
    return res.status(500).json({ e: "internal error" });
  }
});
app.post("/del", async (req, res) => {
  try {
    const deletedItem = await email.findByIdAndDelete(req.body.id);
    console.log(req.body.id);
    res.json(deletedItem);
  } catch (error) {
    console.error("Error deleting item:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});
app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  console.log(req.body);

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({ error: "Invalid username or password" });
    }

    if (password === user.password) {
      return res.json({ message: "Login successful", user });
    } else {
      return res.status(401).json({ error: "Invalid username or password" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.listen(PORT, () => {
  console.log(`server started on ${PORT}`);
});
