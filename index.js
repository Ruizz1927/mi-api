import express from "express";
import cors from "cors";

const app = express();
app.use(cors());

app.get('/', (req, res) => {
  res.send('Este servidor funciona correctamente');
});

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
