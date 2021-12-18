import express from 'express';
import fs from 'fs';

import { Posts } from "../Models/postsModel.js";

//TODO: Роут для поиска
const searchRouter = express.Router();

//TODO: Написать запрос на поиск среди твиттов (просто по совпадению куска текста)
searchRouter.get('/', function(req, res) {
    Posts.find({name: {$regex: req.query.name}}, function (err, post) {
        res.send(post)
    });
});

export default searchRouter
