import axios from 'axios'
import { API_ENDPOINT } from '~/utils'

export const getVideoList = async (title, page) => {
    try {
        const response = await axios({
            url: `${API_ENDPOINT}/api/videos?type=${title}&page=${page}`,
            method: 'get'
        })
        return response.data
    } catch (error) {
        console.error('Error: ', error)
    }
}
