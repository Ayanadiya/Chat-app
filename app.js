const express=require('express');
const http=require('http');
const bodyParser=require('body-parser');
const fs=require('fs');
const loginroute=require('./routers/login');
const chatroute=require('./routers/chat');
const app=express();
app.use(bodyParser.urlencoded({extended:false}));
app.use(loginroute);
app.use(chatroute);

app.listen(3000);