import express, { json, urlencoded } from "express";
import cors from "cors";
import axios from "axios";

const app = express();
const PORT = 5000;

app.use(cors());
app.use(json());
app.use(urlencoded({ extended: true }));

app.post("/rest-auth/login/", async (req, res) => {
  try {
    const res = await axios.post(
      "https://assignment.ongshak.com/rest-auth/login/",
      req.body
    );
    res.send(res.data);
  } catch (error) {
    res.status(500).send("Error");
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});

app.get("/", (req, res) => {
  res.send("Server is active.");
});
