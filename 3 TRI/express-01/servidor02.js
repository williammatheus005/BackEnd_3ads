import express from 'express'
import path from 'path'

const dirBase = import.meta.dirname
const app = express()
const porta = 3000

app.use(express.static(path.join(dirBase,'publico')))

//cria as rotas do servidor
app,get('/', (req, res) => {
    res.send('Hola e tai tai e ru', {root: dirBase})
} )

//liberar a porta do meu computador
app.listen(porta, () => { console.log('Servidor está vivo!')})