var express = require("express");
var app = express();

app.set('view engine','ejs');

app.get("/",function(req, res){
    res.render("index", {title: "Hello World"});
})


app.listen(3000, function() {
    console.log("Server running on 3000");
})
