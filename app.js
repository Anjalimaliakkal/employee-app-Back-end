const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const employee = require("./models./employee")

const app = express()
app.use(cors())

app.get("/", (req, res) => {
    res.send("add employees")
})

app.get("/search", (req, res) => {
    res.send("search employees")
})

app.post("/delete", (req, res) => {
    res.send("delete employees")
})

app.post("/ViewAll", (req, res) => {
    res.send("view all")
})

app.listen(8080, () => {
    console.log("server started")
})