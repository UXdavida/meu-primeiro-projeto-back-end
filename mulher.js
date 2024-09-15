const express = require("express")
const router = express.Router()

const app = express()
const porta = 3333

function mostraMulher(request, response) {
    response.json({
        nome: "Estela Kanashiki",
        imagem: "https://media.licdn.com/dms/image/v2/C4E03AQG5KLhcFtAJTQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1623972022205?e=1732147200&v=beta&t=lX0A_gFFgfSnvXtoNdQ2g5hVMlA-mhDr-3Jdk9TVkqM",
        minibio: "Desenvolvedora e UX Designer",
    })
}

function mostraPorta() {
    console.log("Servidor criado e rodando na porta ", porta)
}

app.use(router.get("/mulher", mostraMulher))
app.listen(porta, mostraPorta)