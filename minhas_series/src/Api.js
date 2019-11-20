import axios from 'axios'

/*
const api = axios.create({
    baseUrl: 'http://localhost:8080/'
})
/** */
const api = 'http://localhost:8080'

const apis = {
    loadGenres:() => axios.get(`${api}/genres`),
    loadSeries:() => axios.get(`${api}/series`),
    saveSeries:(newSeries) => axios.post(`${api}/series`, newSeries),
    loadSeriesByGenre: (genre) => axios.get(`${api}/series?genre=${genre}`)

}

//console.log(apis)
export default apis