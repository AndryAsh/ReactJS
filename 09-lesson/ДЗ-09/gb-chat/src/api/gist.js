import { request } from './request'

export const getPublicGistAPI = (page = 1) => {
    return request.get(`/gists/public?page=${page}`)
}

export const getGistsByNameAPI = (name = 'bogdanq') => {
    return request.get(`/users/${name}/gists`)
}