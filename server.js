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

    const url = `https://api.themoviedb.org/3/discover/movie?api_key=${apikey}&language=pt-BR&page=1`
    const url2 = `https://api.themoviedb.org/3/discover/movie?api_key=${apikey}&language=pt-BR&page=2`
    const url3 = `https://api.themoviedb.org/3/discover/movie?api_key=${apikey}&language=pt-BR&page=3`
    const url4 = `https://api.themoviedb.org/3/discover/movie?api_key=${apikey}&language=pt-BR&page=4`
    const url5 = `https://api.themoviedb.org/3/discover/movie?api_key=${apikey}&language=pt-BR&page=5`
    const url6 = `https://api.themoviedb.org/3/discover/movie?api_key=${apikey}&language=pt-BR&page=6`
    const url7 = `https://api.themoviedb.org/3/discover/movie?api_key=${apikey}&language=pt-BR&page=7`

    const reply = await fetch(url)
    const reply2 = await fetch(url2)
    const reply3 = await fetch(url3)
    const reply4 = await fetch(url4)
    const reply5 = await fetch(url5)
    const reply6 = await fetch(url6)
    const reply7 = await fetch(url7)

    const data = await reply.json()
    const data2 = await reply2.json()
    const data3 = await reply3.json()
    const data4 = await reply4.json()
    const data5 = await reply5.json()
    const data6 = await reply6.json()
    const data7 = await reply7.json()


    filmes.push(...data.results)
    filmes.push(...data2.results)
    filmes.push(...data3.results)
    filmes.push(...data4.results)
    filmes.push(...data5.results)
    filmes.push(...data6.results)
    filmes.push(...data7.results)

    response.render('index', { filmes })
})

// Popular
server.get('/popular', () => {

})


server.listen({ port: 8080 }, () => {
    console.log("HTTP server running http://localhost:8080")
})