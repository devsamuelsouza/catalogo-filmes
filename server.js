import express from 'express'
import { configDotenv } from 'dotenv'

const server = express()

configDotenv()
const apikey = process.env.CHAVE_API

server.set('view engine', 'ejs')
server.set('views', './views')
server.use(express.static('public'));

//ID´s
const idsGeneros = new Map();

// Adicionando os objetos ao Map
const generos = [
    { "id": 28, "name": "Action" },
    { "id": 12, "name": "Adventure" },
    { "id": 16, "name": "Animation" },
    { "id": 35, "name": "Comedy" },
    { "id": 80, "name": "Crime" },
    { "id": 99, "name": "Documentary" },
    { "id": 18, "name": "Drama" },
    { "id": 10751, "name": "Family" },
    { "id": 14, "name": "Fantasy" },
    { "id": 36, "name": "History" },
    { "id": 27, "name": "Horror" },
    { "id": 10402, "name": "Music" },
    { "id": 9648, "name": "Mystery" },
    { "id": 10749, "name": "Romance" },
    { "id": 878, "name": "Science Fiction" },
    { "id": 10770, "name": "TV Movie" },
    { "id": 53, "name": "Thriller" },
    { "id": 10752, "name": "War" },
    { "id": 37, "name": "Western" },
    { "id": 10759, "name": "Action & Adventure" },
    { "id": 16, "name": "Animação" },
    { "id": 35, "name": "Comédia" },
    { "id": 80, "name": "Crime" },
    { "id": 99, "name": "Documentário" },
    { "id": 18, "name": "Drama" },
    { "id": 10751, "name": "Família" },
    { "id": 10762, "name": "Kids" },
    { "id": 9648, "name": "Mistério" },
    { "id": 10763, "name": "News" },
    { "id": 10764, "name": "Reality" },
    { "id": 10765, "name": "Sci-Fi & Fantasy" },
    { "id": 10766, "name": "Soap" },
    { "id": 10767, "name": "Talk" },
    { "id": 10768, "name": "War & Politics" },
    { "id": 37, "name": "Faroeste" }
];

generos.forEach(genero => {
    idsGeneros.set(genero.id, genero.name);
});

// Rotas

//Home _________________________________________________________
server.get('/', async (request, response) => {

    const filmesSeries = []

    const url = `https://api.themoviedb.org/3/discover/tv?api_key=${apikey}&language=pt-BR&page=1`
    const url2 = `https://api.themoviedb.org/3/discover/movie?api_key=${apikey}&language=pt-BR&page=1`
    const url3 = `https://api.themoviedb.org/3/discover/movie?api_key=${apikey}&language=pt-BR&page=2`
    const url4 = `https://api.themoviedb.org/3/discover/tv?api_key=${apikey}&language=pt-BR&page=5`
    const url5 = `https://api.themoviedb.org/3/discover/movie?api_key=${apikey}&language=pt-BR&page=3`
    const url6 = `https://api.themoviedb.org/3/discover/tv?api_key=${apikey}&language=pt-BR&page=3`
    const url7 = `https://api.themoviedb.org/3/discover/movie?api_key=${apikey}&language=pt-BR&page=4`
    const url8 = `https://api.themoviedb.org/3/discover/tv?api_key=${apikey}&language=pt-BR&page=4`
    const url9 = `https://api.themoviedb.org/3/discover/movie?api_key=${apikey}&language=pt-BR&page=5`

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


    filmesSeries.push(...data.results)
    filmesSeries.push(...data2.results)
    filmesSeries.push(...data3.results)
    filmesSeries.push(...data4.results)
    filmesSeries.push(...data5.results)
    filmesSeries.push(...data6.results)
    filmesSeries.push(...data7.results)
    filmesSeries.push(...data8.results)
    filmesSeries.push(...data9.results)


    response.render('index', { filmesSeries, idsGeneros })
})
//_________________________________________________________

//Informações_________________________________________________________
server.get('/:tipo/:id', async (request, response) => {

    const url = `https://api.themoviedb.org/3/${request.params.tipo}/${request.params.id}?api_key=${apikey}`
    const reply = await fetch(url)
    const data = await reply.json()

    response.render('info.ejs', { data, idsGeneros })
})

//_________________________________________________________

//Lançamentos _________________________________________________________
server.get('/lancamentos', async (request, response) => {
    const filmesLancamentos = []

    const dataAtual = new Date()
    const dataHoje = `${dataAtual.getFullYear()}`

    const url = `https://api.themoviedb.org/3/discover/tv?api_key=${apikey}&language=pt-BR&page=2&primary_release_year=2024${dataHoje}`
    const url2 = `https://api.themoviedb.org/3/discover/movie?api_key=${apikey}&language=pt-BR&page=2&primary_release_year=2024${dataHoje}`
    const url3 = `https://api.themoviedb.org/3/discover/movie?api_key=${apikey}&language=pt-BR&page=3&primary_release_year=2024${dataHoje}`
    const url4 = `https://api.themoviedb.org/3/discover/tv?api_key=${apikey}&language=pt-BR&page=4&primary_release_year=2024${dataHoje}`
    const url5 = `https://api.themoviedb.org/3/discover/movie?api_key=${apikey}&language=pt-BR&page=5&primary_release_year=2024${dataHoje}`
    const url6 = `https://api.themoviedb.org/3/discover/tv?api_key=${apikey}&language=pt-BR&page=6&primary_release_year=2024${dataHoje}`
    const url7 = `https://api.themoviedb.org/3/discover/movie?api_key=${apikey}&language=pt-BR&page=7&primary_release_year=2024${dataHoje}`
    const url8 = `https://api.themoviedb.org/3/discover/tv?api_key=${apikey}&language=pt-BR&page=8&primary_release_year=2024${dataHoje}`
    const url9 = `https://api.themoviedb.org/3/discover/movie?api_key=${apikey}&language=pt-BR&page=9&primary_release_year=2024${dataHoje}`

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

//Filmes _________________________________________________________
server.get('/filmes', async (request, response) => {

    const filmes = []

    const url = `https://api.themoviedb.org/3/discover/movie?api_key=${apikey}&language=pt-BR&page=1&`
    const url2 = `https://api.themoviedb.org/3/discover/movie?api_key=${apikey}&language=pt-BR&page=2&`
    const url3 = `https://api.themoviedb.org/3/discover/movie?api_key=${apikey}&language=pt-BR&page=3&`
    const url4 = `https://api.themoviedb.org/3/discover/movie?api_key=${apikey}&language=pt-BR&page=4&`
    const url5 = `https://api.themoviedb.org/3/discover/movie?api_key=${apikey}&language=pt-BR&page=5&`
    const url6 = `https://api.themoviedb.org/3/discover/movie?api_key=${apikey}&language=pt-BR&page=6&`
    const url7 = `https://api.themoviedb.org/3/discover/movie?api_key=${apikey}&language=pt-BR&page=7&`
    const url8 = `https://api.themoviedb.org/3/discover/movie?api_key=${apikey}&language=pt-BR&page=8&`
    const url9 = `https://api.themoviedb.org/3/discover/movie?api_key=${apikey}&language=pt-BR&page=9&`

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

})
// _________________________________________________________

server.listen({ port: 3333 }, () => {
    console.log("HTTP server running http://localhost:3333")
})