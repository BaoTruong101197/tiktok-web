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
