import 'reflect-metadata';
import { router } from './routes';
import createConnection from "./database";
import express from "express";
import "express-async-errors";


createConnection();
const app = express();

app.use(express.json());
app.use(router);

export { app };