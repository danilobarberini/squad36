import 'reflect-metadata';
import { router } from './routes';
import express from "express";
import "express-async-errors";



const app = express();

app.use(express.json());
app.use(router);

export { app };