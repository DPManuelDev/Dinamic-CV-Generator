
import express from "express"
const app = express()
app.use(express.json())

/*
CRUD DO CV
*/

///        CREATE CV
const cv = []
app.post( "/build", (req, res) => {

    cv.push(res.body)
//console.log(req.body)
res.send("deu certo")
})

app.get("/user", (req, res) =>{
    res.json(user)
    console.log("pegou")
})

/*
app.get("/", (req,res) => {
    res.send("server is ready!")

})
app.get("/build", (req, res) => {
    res.send("Bem vindo ao teu gerador de CV automático")
} )

app.get("/build" , (req, res)=>{
    res.status(200).json (cv)
})

/*
CRIANDO USER
*/
app.post("/build/user", (req, res) =>{
    res.post()
} )







const port = process.env.PORT || 3000

app.listen(port,() => {
    console.log( `server runing in http//localhost:3000 ${port}`)
} )