const express = require('express')

const app = express();

app.listen(5000, ()=> 
    console.log("Server Running on port 5000")
)