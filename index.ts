import express from "express";
import bodyParser from "body-parser";
import morgan from "morgan";
import helmet from "helmet";
import fs from "fs";


const port = 3000;
const app = express();

app.use(bodyParser.json());
app.use(morgan('common'));
app.use(helmet());
app.get('/', (req, res) => {
    res.json({
        message: "Hello Stranger! How are you?"
    });
});

app.get('/one', (req, res, next) => {
    fs.promises.readFile('./one.txt')
        .then(data => res.send(data))
        .catch(err => next(err))
});

app.use((err, req, res, next)=>{
    console.error('Error 1111: ', err.type);

    if(err.type == 'time-out'){
        res.status(408).send(err)
    }else {
        res.status(500).send(err)
    }
});


app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
})