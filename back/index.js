import express from "express";
import postroutes from './routes/user.route.js';
import connect from "./db/connection.db.js";
import models from "./model/userschema.db.js";
import { createpost } from "./controllers/control.js";
import cors from 'cors'

const app = express();

app.use(express.json()); // Corrected middleware usage
connect();
app.use(cors(
    {
        origin: "http://localhost:5173"
    }
));
app.listen(8000, () => {
    console.log("Server is running on port 8000");
});

app.use('/news', postroutes);


app.get('/wow',()=>{
    console.log();
})




