// app.js
import express, { json } from "express";

const app = express();
app.use(json());

const estudiantes = [
  {
    nombre: "Juan",
    edad: 20,
    carrera: "Ingeniería",
  },
  {
    nombre: "María",
    edad: 22,
    carrera: "Medicina",
  },
  {
    nombre: "Pedro",
    edad: 21,
    carrera: "Derecho",
  },
  {
    nombre: "Ana",
    edad: 19,
    carrera: "Arquitectura",
  },
  {
    nombre: "Luis",
    edad: 23,
    carrera: "Psicología",
  },
];

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hola desde CodeBuild y Express 🚀");
});

app.get("/estudiantes", (req, res) => {
  res.json(estudiantes);
});

app.post("/estudiantes", (req, res) => {
  const estudiante = req.body;
  estudiantes.push(estudiante);
  res.json(estudiantes);
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});

export default app;
