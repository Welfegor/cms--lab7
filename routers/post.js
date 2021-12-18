import express from 'express';
import fs from 'fs';
import { Posts } from "../Models/postsModel.js";

//TODO: Написать роут для твиттов (напр. /post)
const postRouter = express.Router();
//Для чтения тела POST запроса
const urlencodedParser = express.urlencoded({extended: false});

//TODO: Написать запрос для получения всех твиттов (пока можно хранить ввиде JSON файла или JS объекта)
postRouter.get('/', (req, res) => {
    Posts.find({}, function (err, post) {
        res.send(post)
    });
});

//TODO: Написать запрос для получения твитта по его ID
postRouter.get('/:id', (req, res) => {
    Posts.findOne({id: req.params.id}, function (err, post) {
        res.send(post)
    });
});

//TODO: Написать POST запрос для отправки твитта (пока никуда записывать его не надо, нужно просто вернуть отправвленные данные назад)
postRouter.post('/', urlencodedParser, (req, res) => {
    const twit = new Posts({
        name: req.body.name,
        id: req.body.name
    })
    twit.save()
})


export default postRouter
