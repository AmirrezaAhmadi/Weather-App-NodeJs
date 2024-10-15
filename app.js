const express = require('express');
const app = express();
var path = require('path');
require('dotenv').config();
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs')

app.get('/' , (req,res)=>{{
    res.render('index')
}})

const port = process.env.PORT;
app.listen(port , ()=>{
    console.log(`your server is running on port : ${port}`);
})