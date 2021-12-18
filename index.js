import express from 'express';
import rootRouter from './routers/root.js'
import userRouter from './routers/users.js';
import postRouter from './routers/post.js';
import actualRouter from './routers/actual.js';
import searchRouter from './routers/search.js';
import mongoose from 'mongoose';
import { Comments } from "./Models/commentsModel.js";


const app = express();
const urlencodedParser = express.urlencoded({extended: false});
const port = '8000';

app.use('/', rootRouter);
app.use('/user', userRouter);
app.use('/post', postRouter);
app.use('/actual', actualRouter);
app.use('/search', searchRouter);


//TODO: Заменить ссылку на свою
//'mongodb+srv://ЛОГИН:ПАРОЛЬ@АДРЕСС_МОНГОДБ.NET/НАЗВАНИЕ_БАЗЫ?retryWrites=true&w=majority'
// const url = 'mongodb+srv://root:root@mongodb.net/sample_mflix?retryWrites=true&w=majority'
// const url = 'mongodb+srv://:@cluster0.23hms.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

mongoose.connect(url, () => console.log('Mongo   connected'))

//TODO: Пример простейшего запроса к монго
app.get('/comment/:name', (req, res) => {
    Comments.findOne({name: req.params.name}, (err, comment) => {
        if (err) {
            res.send('Comment not found')
        } else {
            res.send(comment)
        }
    })
})

app.post('/add_comment', urlencodedParser, (req, res) => {
    const newComment = new Comments({
        name: req.body.name,
        email: req.body.email,
        text: "test",
        movie_id: '573a1390f29313caabcd446f',
        date: new Date(),
    })
    newComment.save((err) => res.send(err))
})

app.listen(port, () => {
    console.log(`xample app listening at http://localhost:${port}`)
})