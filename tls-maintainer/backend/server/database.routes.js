import { Router } from "express";
import { getNumberOfDocuments, getAllDocuments } from "./db/conn.js";               //Imports /get queries

export const databaseRouter = Router();

databaseRouter.get("/getCount", async (req, res) => {
    //'Content-Type: application/json' <- request needs this for post/put for req.body to be JSON.parsed already
    const count = await getNumberOfDocuments();
    res.json({
        count
    });
});

databaseRouter.get("/getAll", async (req, res) => {
    const data = await getAllDocuments();
    res.json({
        data
    });
});