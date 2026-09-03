import express from 'express'

const app = express()
const porta = 3000

//cria as rotas do servidor
app,get('/', (req, res) => {
    res.send('Hola e tai tai e ru')
} )

//liberar a porta do meu computador
app.listen(porta, () => { console.log('Servidor está vivo!')})