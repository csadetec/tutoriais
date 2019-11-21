import axios from 'axios'

/*
const api = axios.create({
    baseUrl: 'http://localhost:8080/'
})
/** */
//const api = 'http://localhost:8080'
const api = `http://localhost/tutoriais/minhas_series/backend/index.php`
const apis = {
    loadGenres:() => axios.get(`${api}/genres`),
    loadSeries:() => axios.get(`${api}/series`),
    saveSeries:(newSeries) => axios.post(`${api}/series/post`, newSeries),
    //loadSeriesByGenre: (genre) => axios.get(`${api}/series?genre=${genre}`),
    loadSeriesByGenre: (genre) => axios.get(`${api}/series/genre/${genre}`),
    
    deleteSeries: (id) => axios.delete(`${api}/series/${id}`),
    loadSeriesById: (id) => axios.get(`${api}/series/${id}`),
    updateSeries: (series) =>  axios.put(`${api}/series/${series.id}`, series)


}

//console.log(apis)
export default apis