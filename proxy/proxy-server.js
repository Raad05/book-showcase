import express, { json, urlencoded } from "express";
import cors from "cors";
import axios from "axios";

const app = express();
const PORT = 5000;

app.use(cors());
app.use(json());
app.use(urlencoded({ extended: true }));

app.get("/get_books/", async (req, res) => {
  try {
    const token = req.headers.authorization;
    if (!token) {
      return res.status(401).send("Unauthorized user");
    }
    const result = await axios.get(
      "https://assignment.ongshak.com/get_books/",
      {
        headers: {
          Authorization: token,
        },
      }
    );
    res.send(result.data);
  } catch (err) {
    console.log("Error fetching books: ", err);
    res.status(500).send("Failed to load books");
  }
});

app.post("/rest-auth/login/", async (req, res) => {
  try {
    const result = await axios.post(
      "https://assignment.ongshak.com/rest-auth/login/",
      req.body
    );
    res.send(result.data);
  } catch (err) {
    console.log("Error: ", err);
    res.status(500).send("Failed to login.");
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});

app.get("/", (req, res) => {
  res.send("Server is active.");
});
