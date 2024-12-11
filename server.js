import express from 'express'
import apikey from './apikey.mjs'

const server = express()

server.set('view engine', 'ejs')
server.set('views', './views')
server.use(express.static('public'));

// Rotas

//Home
server.get('/', async (request, response) => {

    const filmes = []

    const url = `https://api.themoviedb.org/3/discover/movie?api_key=${apikey}&language=pt-BR`
    const url2 = `https://api.themoviedb.org/3/discover/movie?api_key=${apikey}&language=pt-BR&page=2`

    const reply = await fetch(url)
    const reply2 = await fetch(url2)

    const data = await reply.json()
    const data2 = await reply2.json()

    filmes.push(data)
    filmes.push(data2)
    console.log(filmes)

    response.render('index', { filmes })
})

// Popular
server.get('/popular', () => {

})


server.listen({ port: 8080 }, () => {
    console.log("HTTP server running http://localhost:8080")
})