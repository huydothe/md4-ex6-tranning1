import express from "express";
import bodyParser from "body-parser";
import morgan from "morgan";


const port = 3000;
const app = express();

app.use(bodyParser.json());
app.use(morgan('common'));
app.get('/',(req,res)=>{
    res.json({
        message : "Hello Stranger! How are you?"
    });
});



app.listen(port,()=>{
    console.log(`Server is running at http://localhost:${port}`);
})