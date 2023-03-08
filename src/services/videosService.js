import axios from 'axios'
import { API_ENDPOINT } from '~/utils'

export const getVideoList = async (title, page, token = '') => {
    try {
        const response = await axios({
            url: `${API_ENDPOINT}/api/videos?type=${title}&page=${page}`,
            method: 'get',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
            }
        })
        return response.data
    } catch (error) {
        console.error('Error: ', error)
    }
}

export const createVideo = async (formData, token) => {
    try {
        const response = await axios
            .post('https://tiktok.fullstack.edu.vn/api/videos', formData, {
                headers: { 'content-type': 'multipart/form-data', Authorization: `Bearer ${token}` }
            })
            .catch(error => {
                console.log(error)
            })

        return response.data
    } catch (error) {
        console.log('Error', error)
    }
}
