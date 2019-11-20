import axios from 'axios'

/*
const api = axios.create({
    baseUrl: 'http://localhost:8080/'
})
/** */
const api = 'http://localhost:8080'

const apis = {
    loadGenres:() => axios.get(`${api}/genres`),
    loadSeries:() => axios.get(`${api}/series`)

}

//console.log(apis)
export default apis