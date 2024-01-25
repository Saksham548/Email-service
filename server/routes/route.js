import express from "express";

// import saveUser from "../controllers/userControl";
import { saveSent } from "../controllers/emailControl.js";

const routes = express.Router();

routes.post("/save", saveSent);
// routes.post("/register", saveUser);

export default routes;
