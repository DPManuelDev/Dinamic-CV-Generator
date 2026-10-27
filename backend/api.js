import express from "express"

const app = express()

app.post("/build", (req,res) =>{
    res.send("good mornig")
    console.log("servidor funcionando...")
} )


app.listen(3000)