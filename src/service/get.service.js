import { DATA } from '../data/urlAPI'
import axios from 'axios'

const config = {
    timeout: 20000,
}

export const getServiceStarWars = {
    getListFilm,
    getListCharacter,
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