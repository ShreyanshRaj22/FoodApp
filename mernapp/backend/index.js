const express = require("express");
const app = express();
const port = 5000;
const mongoDB = require("./db")
mongoDB();
//to handle CORS error
app.use((req,res,next)=>{
    res.setHeader("Access-Control-Allow-Origin","http://localhost:3000");// react app address
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    )
    next();
})

app.get('/',(req,res)=>{
    res.send('Hello World')
})
// using app.use() middleware
app.use(express.json())
app.use('/api', require("./Routes/CreateUser"));
app.use('/api', require("./Routes/DisplayData"));
app.listen(port,()=>{
    console.log(`Server started on port ${port}`)
});