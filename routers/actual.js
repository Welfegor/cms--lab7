import express from 'express';
import fs from 'fs';
import { Actuals } from "../Models/actualModel.js";

//TODO: Роут для актуального
const actualRouter = express.Router();

//TODO: Написать запрос на получение списка актуального
actualRouter.get('/', (req, res) => {
    Actuals.find({}, function (err, actual) {
        res.send(actual)
    });
});

export default actualRouter