const express = require('express');

const app = express();

app.use(express.static("public"));

app.use(express.urlencoded({extended:true}));

app.get('/' , (req , res)=>{

   res.sendFile(__dirname+"/index.html")

});

app.listen(3000, () => {
    console.log(`Server started on port 3000 .... ... .. .`);
});