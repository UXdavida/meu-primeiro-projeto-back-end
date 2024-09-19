const mongoose = require('mongoose')

async function conectaBancoDeDados() {
    try {
        console.log("Conexão com banco de dados iniciou")

    await mongoose.connect('mongodb+srv://uxdavida:q8n4O701XISuF7oS@clustermulheres.evifj.mongodb.net/?retryWrites=true&w=majority&appName=ClusterMulheres')

    console.log('Conexão com banco de dados feita com sucesso!')
    } catch(erro) {
        console.log(erro)
    }
}

module.exports = conectaBancoDeDados
