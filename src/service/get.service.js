import { DATA } from '../data/urlAPI'
import axios from 'axios'

const config = {
    timeout: 20000,
}

export const getServiceStarWars = {
    getListFilm,
    getListCharacter,
    getDetailFilm,
    getDetailCharacter,
    getbyUrl,
}

function getListFilm () {
    return axios
        .get(`${DATA.URL_FILMS}`, config)
        .then(response => response.data)
}

function getListCharacter () {
    return axios
        .get(`${DATA.URL_CHARACTER}`, config)
        .then(response => response.data)
}

function getDetailFilm (id) {
    const URL = `${DATA.URL_FILMS}`+  id + '/'
    return axios
    .get( URL, config)
    .then(response => response.data) 
}

function getDetailCharacter (id) {
    const URL = `${DATA.URL_CHARACTER}`+  id + '/'
    return axios
    .get( URL, config)
    .then(response => response.data) 
}

function getbyUrl (url) {
    return axios
    .get( url, config)
    .then(response => response.data) 
}