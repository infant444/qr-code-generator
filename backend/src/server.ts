import express from 'express';
import cors from 'cors';
import userRouter from '../src/router/user.router';

const app=express();

app.use(express.json());
app.use(cors({
    credentials:true,
    origin:["http://localhost:4200"]
}));

app.get("/",(req,res)=>{
    res.send("Hello");
})
app.use('/user',userRouter);

const Port=process.env.PORT||'5000';
app.listen(Port,()=>{
console.log("Backend start http://localhost:"+Port);
});