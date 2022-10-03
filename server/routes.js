import express from "express";
import { con } from "./database.js";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  con.query("SELECT * FROM text", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.post("/post", (req, res) => {
  let titulo = req.body.titulo;
  let texto = req.body.texto;
  console.log(texto);
  con.query(
    `INSERT INTO TEXT (titulo,texto) VALUES (?,?)`,
    [titulo, texto],
    (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log("post completado ");
      }
    }
  );
});

app.delete("/delete",  function (req, res) {
  let id = req.body.id;
  console.log(id);
  con.query("delete FROM text where id=?", [id], (err, res) => {
    if (err) {
      console.log(err);
    } else {
      console.log("eliminado", res.affectedRows);
    }
  });
});

app.put("/edit", (req, res) => {
  let titulo = req.body.titulo;
  let texto = req.body.texto;
  let id = req.body.id;
  con.query("update text set titulo = ?,texto = ? where id = ?",
    [titulo, texto, id],
    (err, res) => {
      if (err) {
        console.log(err);
      } else {
        console.log("editado", res.affectedRows);
      }
    }
  );
});


app.listen(process.env.PORT || 3002, () => {
  console.log("App is listening ");
});