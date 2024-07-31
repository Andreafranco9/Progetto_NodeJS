const express = require('express')
const app = express()  //metodo che crea un'istanza di express con tutte le sue funzionalità 



const {calendario} = require('./calendario')

app.get('/', (req, res) => {
    res.send("<h1>Homepage</h1><a href='/calendario'> Vai al calendario</a>")
})
app.get('/calendario', (req, res) =>{
    res.json(calendario)
} 
)
app.listen(3000)
  