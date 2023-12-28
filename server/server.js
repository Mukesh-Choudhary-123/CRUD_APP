import express from "express";
import mysql from "mysql2";
import cors from "cors";

async function loadEnv() {
  await import("dotenv").then(({ config }) => {
    config();
  });
}

loadEnv();

const app = express();
app.use(cors());
app.use(express.json());

const conn = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "",
  database: "",
});

app.get("/", (req, res) => {
  const sql = "SELECT * FROM users";
  conn.query(sql, (err, result) => {
    if (err) return res.json({ Message: "Error inside server" });
    return res.json(result);
  });
});

app.post("/user", (req, res) => {
  const sql = "INSERT INTO users (`name`,`email`) VALUES (?)";
  const values = [req.body.name, req.body.email];
  conn.query(sql, [values], (err, result) => {
    if (err) return res.json(err);
    return res.json(result);
  });
});

app.get("/read/:id", (req, res) => {
  const sql = "SELECT * FROM users WHERE id = ?";
  const { id } = req.params;
  conn.query(sql, [id], (err, result) => {
    if (err) return res.json({ Message: "Error inside server" });

    return res.json(result);
  });
});

app.put("/update/:id", (req, res) => {
  const sql = "UPDATE users SET `name`=?, `email`=? WHERE id=? ";
  const { id } = req.params;
  conn.query(sql, [req.body.name, req.body.email, id], (err, result) => {
    if (err) return res.json({ Message: "Error inside server" });
    return res.json(result);
  });
});

app.delete("/delete/:id", (req, res) => {
  const sql = "DELETE FROM users WHERE id=?";
  const { id } = req.params;
  conn.query(sql, [id], (err, result) => {
    if (err) return res.json({ Message: "Error side server" });
    return res.json(result);
  });
});

const port = 8080;

app.listen(port, () => {
  console.log("I'm Listening");
});
