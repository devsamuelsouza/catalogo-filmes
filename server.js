import express from 'express'
import apikey from './apikey.mjs'

const server = express()

server.set('view engine', 'ejs')
server.set('views', './views')
server.use(express.static('public'));

// Rotas
server.get('/', async (request, response) => {
    const filmes = []

    for (var i = 277; i <= 278; i++) {
        const url = `https://api.themoviedb.org/3/movie/${i}?api_key=${apikey}`
        const reply = await fetch(url)
        const data = await reply.json()
        if (reply.status == 200) {
            filmes.push(data)
        }
    }
    response.render('index', {filmes})
})

server.get('/popular', ()=>{

})


server.listen({ port: 8080 }, () => {
    console.log("HTTP server running http://localhost:8080")
})