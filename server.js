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

// Generos _________________________________________________________
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
//_________________________________________________________
// Rotas

//Home_________________________________________________________
server.get('/', async (request, response) => {

    const filmesSeries = []
    const randomPage = Math.random() * 300
    const urlFilmes = `https://api.themoviedb.org/3/discover/tv?api_key=${apikey}&language=pt-BR&page=${randomPage}`
    const urlSeries = `https://api.themoviedb.org/3/discover/movie?api_key=${apikey}&language=pt-BR&page=${randomPage}`

    const reply = await fetch(urlFilmes)
    const reply2 = await fetch(urlSeries)

    const data = await reply.json()
    const data2 = await reply2.json()

    filmesSeries.push(...data.results)
    filmesSeries.push(...data2.results)


    response.render('index', { filmesSeries, idsGeneros })
})
//_________________________________________________________________

// Paginas_________________________________________________________
server.get('/pagina=:numPagina', async (request, response) => {
    const numPagina = request.params.numPagina
    const numPaginaRandom = Math.random() * 500

    const filmesSeries = []

    const urlFilmes = `https://api.themoviedb.org/3/discover/tv?api_key=${apikey}&language=pt-BR&page=${numPaginaRandom}`
    const urlSeries = `https://api.themoviedb.org/3/discover/movie?api_key=${apikey}&language=pt-BR&page=${numPaginaRandom}`

    const reply = await fetch(urlFilmes)
    const reply2 = await fetch(urlSeries)

    const data = await reply.json()
    const data2 = await reply2.json()

    filmesSeries.push(...data.results)
    filmesSeries.push(...data2.results)


    response.render('index', { filmesSeries, idsGeneros })
})
//___________________________________________________________________

//Informações_________________________________________________________
server.get('/:tipo/:id', async (request, response) => {

    const url = `https://api.themoviedb.org/3/${request.params.tipo}/${request.params.id}?api_key=${apikey}&language=pt-BR`
    const reply = await fetch(url)
    const data = await reply.json()

    response.render('info.ejs', { data, idsGeneros })
})
//_________________________________________________________

// Sobre_________________________________________________________

server.get('/', (request, response) => {

    response.render('sobre')
})
// _________________________________________________________
// Rota de Erro
server.use((request, response, next) => {
    response.status(404).render('erro')
})
// _________________________________________________________

server.listen({ port: 3333 }, () => {
    console.log("HTTP server running http://localhost:3333")
})