let express = require("express");
let bodyParser = require("body-parser");
let app = express();
let db = []

app.engine("html",require('ejs').renderFile);
app.set("view engine","html");

app.use(express.static("public/images"));
app.use(express.static("public/styles"));

app.use(bodyParser.urlencoded({
    extended: false
}));

app.get("/",function(req,res){
    res.render("index.html");
})

app.get("/addTask.html",function(req,res){
    res.render("addTask.html");
})

app.get("/allTasks.html",function(req,res){
    res.render("allTasks.html",{tasks: db});
})

app.post("/data", function(req,res){
    db.push(req.body);
    console.log(db);
    res.render("addTask.html",{tasks: db});
})

app.listen(8080);