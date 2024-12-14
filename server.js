import express from 'express'
import { configDotenv } from 'dotenv'

const server = express()

configDotenv()
const apikey = process.env.CHAVE_API

server.set('view engine', 'ejs')
server.set('views', './views')
server.use(express.static('public'));

// Rotas

//Home _________________________________________________________
server.get('/', async (request, response) => {

    const filmes = []

    const url = `https://api.themoviedb.org/3/discover/tv?api_key=${apikey}&language=pt-BR&page=2`
    const url2 = `https://api.themoviedb.org/3/discover/movie?api_key=${apikey}&language=pt-BR&page=2`
    const url3 = `https://api.themoviedb.org/3/discover/movie?api_key=${apikey}&language=pt-BR&page=3`
    const url4 = `https://api.themoviedb.org/3/discover/tv?api_key=${apikey}&language=pt-BR&page=4`
    const url5 = `https://api.themoviedb.org/3/discover/movie?api_key=${apikey}&language=pt-BR&page=5`
    const url6 = `https://api.themoviedb.org/3/discover/tv?api_key=${apikey}&language=pt-BR&page=6`
    const url7 = `https://api.themoviedb.org/3/discover/movie?api_key=${apikey}&language=pt-BR&page=7`
    const url8 = `https://api.themoviedb.org/3/discover/tv?api_key=${apikey}&language=pt-BR&page=8`
    const url9 = `https://api.themoviedb.org/3/discover/movie?api_key=${apikey}&language=pt-BR&page=9`

    const reply = await fetch(url)
    const reply2 = await fetch(url2)
    const reply3 = await fetch(url3)
    const reply4 = await fetch(url4)
    const reply5 = await fetch(url5)
    const reply6 = await fetch(url6)
    const reply7 = await fetch(url7)
    const reply8 = await fetch(url8)
    const reply9 = await fetch(url9)

    const data = await reply.json()
    const data2 = await reply2.json()
    const data3 = await reply3.json()
    const data4 = await reply4.json()
    const data5 = await reply5.json()
    const data6 = await reply6.json()
    const data7 = await reply7.json()
    const data8 = await reply8.json()
    const data9 = await reply9.json()


    filmes.push(...data.results)
    filmes.push(...data2.results)
    filmes.push(...data3.results)
    filmes.push(...data4.results)
    filmes.push(...data5.results)
    filmes.push(...data6.results)
    filmes.push(...data7.results)
    filmes.push(...data8.results)
    filmes.push(...data9.results)

    response.render('index', { filmes })
})
//_________________________________________________________

// Popular _________________________________________________________
server.get('/populares', async (request, response) => {
    const filmesPoupulares = []

    const url = `https://api.themoviedb.org/3/discover/tv?api_key=${apikey}&language=pt-BR&page=2&vote_average.gte=7`
    const url2 = `https://api.themoviedb.org/3/discover/movie?api_key=${apikey}&language=pt-BR&page=2&vote_average.gte=7`
    const url3 = `https://api.themoviedb.org/3/discover/movie?api_key=${apikey}&language=pt-BR&page=3&vote_average.gte=7`
    const url4 = `https://api.themoviedb.org/3/discover/tv?api_key=${apikey}&language=pt-BR&page=4&vote_average.gte=7`
    const url5 = `https://api.themoviedb.org/3/discover/movie?api_key=${apikey}&language=pt-BR&page=5&vote_average.gte=7`
    const url6 = `https://api.themoviedb.org/3/discover/tv?api_key=${apikey}&language=pt-BR&page=6&vote_average.gte=7`
    const url7 = `https://api.themoviedb.org/3/discover/movie?api_key=${apikey}&language=pt-BR&page=7&vote_average.gte=7`
    const url8 = `https://api.themoviedb.org/3/discover/tv?api_key=${apikey}&language=pt-BR&page=8&vote_average.gte=7`
    const url9 = `https://api.themoviedb.org/3/discover/movie?api_key=${apikey}&language=pt-BR&page=9&vote_average.gte=7`

    const reply = await fetch(url)
    const reply2 = await fetch(url2)
    const reply3 = await fetch(url3)
    const reply4 = await fetch(url4)
    const reply5 = await fetch(url5)
    const reply6 = await fetch(url6)
    const reply7 = await fetch(url7)
    const reply8 = await fetch(url8)
    const reply9 = await fetch(url9)

    const data = await reply.json()
    const data2 = await reply2.json()
    const data3 = await reply3.json()
    const data4 = await reply4.json()
    const data5 = await reply5.json()
    const data6 = await reply6.json()
    const data7 = await reply7.json()
    const data8 = await reply8.json()
    const data9 = await reply9.json()


    filmesPoupulares.push(...data.results)
    filmesPoupulares.push(...data2.results)
    filmesPoupulares.push(...data3.results)
    filmesPoupulares.push(...data4.results)
    filmesPoupulares.push(...data5.results)
    filmesPoupulares.push(...data6.results)
    filmesPoupulares.push(...data7.results)
    filmesPoupulares.push(...data8.results)
    filmesPoupulares.push(...data9.results)

    response.render('popular', { filmesPoupulares })
})
//_________________________________________________________

//Lançamentos _________________________________________________________
server.get('/lancamentos', async (request, response) => {
    const filmesLancamentos = []

    const dataAtual = new Date()
    const dataHoje = `${dataAtual.getFullYear()}-${dataAtual.getMonth()}-${dataAtual.getDate()}`

    const url = `https://api.themoviedb.org/3/discover/tv?api_key=${apikey}&language=pt-BR&page=2&year=1`
    const url2 = `https://api.themoviedb.org/3/discover/movie?api_key=${apikey}&language=pt-BR&page=2&year=1`
    const url3 = `https://api.themoviedb.org/3/discover/movie?api_key=${apikey}&language=pt-BR&page=3&year=1`
    const url4 = `https://api.themoviedb.org/3/discover/tv?api_key=${apikey}&language=pt-BR&page=4&year=1`
    const url5 = `https://api.themoviedb.org/3/discover/movie?api_key=${apikey}&language=pt-BR&page=5&year=1`
    const url6 = `https://api.themoviedb.org/3/discover/tv?api_key=${apikey}&language=pt-BR&page=6&year=1`
    const url7 = `https://api.themoviedb.org/3/discover/movie?api_key=${apikey}&language=pt-BR&page=7&year=1`
    const url8 = `https://api.themoviedb.org/3/discover/tv?api_key=${apikey}&language=pt-BR&page=8&year=1`
    const url9 = `https://api.themoviedb.org/3/discover/movie?api_key=${apikey}&language=pt-BR&page=9&year=1`

    const reply = await fetch(url)
    const reply2 = await fetch(url2)
    const reply3 = await fetch(url3)
    const reply4 = await fetch(url4)
    const reply5 = await fetch(url5)
    const reply6 = await fetch(url6)
    const reply7 = await fetch(url7)
    const reply8 = await fetch(url8)
    const reply9 = await fetch(url9)

    const data = await reply.json()
    const data2 = await reply2.json()
    const data3 = await reply3.json()
    const data4 = await reply4.json()
    const data5 = await reply5.json()
    const data6 = await reply6.json()
    const data7 = await reply7.json()
    const data8 = await reply8.json()
    const data9 = await reply9.json()


    filmesLancamentos.push(...data.results)
    filmesLancamentos.push(...data2.results)
    filmesLancamentos.push(...data3.results)
    filmesLancamentos.push(...data4.results)
    filmesLancamentos.push(...data5.results)
    filmesLancamentos.push(...data6.results)
    filmesLancamentos.push(...data7.results)
    filmesLancamentos.push(...data8.results)
    filmesLancamentos.push(...data9.results)

    response.render('lancamento', { filmesLancamentos })
})
//_________________________________________________________


server.listen({ port: 3333 }, () => {
    console.log("HTTP server running http://localhost:3333")
})