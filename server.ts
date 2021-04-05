import 'reflect-metadata';
import { router } from './backend/src/routes';
import createConnection from "./backend/src/database";
import express from "express";
import "express-async-errors";
import path from "path";


createConnection();
const app = express();

app.use(express.json());
app.use(router);
app.use(express.static(path.join(__dirname, "frontend")));
console.log(__dirname)

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "frontend", "landing-page.html"))

})

app.listen(3333, () => console.log("Deu bom, meu brother"));