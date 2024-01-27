const express = require("express")
const articleRouter = require("./routes/articles")
const Article = require('./models/articles')
const mongoose = require("mongoose")
const app=express()

app.set("view engine","ejs")
app.get('/',(req,res)=>{
    res.render("index")
})
app.route("/articles",articleRouter)

app.listen(3000)
