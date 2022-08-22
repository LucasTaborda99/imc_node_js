// Criando o servidor, sem express
// const hostname = '127.0.0.1'
// const port = 3000
// const http = require('http')

// const server = http.createServer((req, res) => {
//     res.statusCode = 200
//     res.setHeader('Content-Type', 'text/plain')
//     res.end('What heck New World!')
// })

// server.listen(port, hostname, () => {
//     console.log('Servidor executando!')
// })

// Utilizando express
const express = require('express')
const app = express()
const path = require('path')
const router = express.Router()
const bodyParser = require('body-parser')

app.use(express.static(__dirname + '/public'));

app.use(bodyParser.urlencoded({ extended: true }));

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/public/index.html'))
})

router.post('/imc', (req, res) => {
    const resultado = req.body.resultado
    res.send("<h1> Resultado -> " + resultado + "</h1>")
})

app.use('/', router)
app.listen(process.env.port || 3000)

console.log('Server rodando')