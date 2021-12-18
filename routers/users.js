import express from 'express';
import fs from 'fs';
import {Users} from "../Models/usersModel.js";

const userRouter = express.Router();

//TODO: Написать запрос на получение всех пользователей
userRouter.get('/', (req, res) => {
    Users.find({}, function (err, users) {
        res.send(users)
    });
});

//TODO: Возращать данные из какого-нибудь статичного JSON файла или простого JS объекта по ID пользователя и выводить на экран его никнейм.
userRouter.get('/:id', (req, res) => {
    Users.findOne({id: req.params.id}, function (err, user) {
        res.send(user)
    });
});



export default userRouter