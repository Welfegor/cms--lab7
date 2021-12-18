import express from 'express';

const rootRouter = express.Router();
//Для чтения тела POST запроса
const urlencodedParser = express.urlencoded({extended: false});

rootRouter.get('/', (req, res) => {
    res.send('Hello World!')
})

rootRouter.post('/', urlencodedParser, (req, res) => {
    const name = req.body.name;
    const responseMessage = "Hello " + name + "!"
    res.send(responseMessage)
})


export default rootRouter;