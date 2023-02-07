import axios from 'axios'
import { API_ENDPOINT } from '~/utils'

export const followUser = async (userId, token) => {
    try {
        const response = await axios({
            url: `${API_ENDPOINT}/api/users/${userId}}/follow`,
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
            }
        })
        return response
    } catch (error) {
        console.error('Error: ', error)
    }
}

export const unFollowUser = async (userId, token) => {
    try {
        const response = await axios({
            url: `${API_ENDPOINT}/api/users/${userId}}/unfollow`,
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
            }
        })
        return response
    } catch (error) {
        console.error('Error: ', error)
    }
}

export const getFollowingsList = async (index, token) => {
    try {
        const response = await axios({
            url: `${API_ENDPOINT}/api/me/followings?page=${index}`,
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
