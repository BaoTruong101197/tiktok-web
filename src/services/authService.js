import axios from 'axios'
import { API_ENDPOINT } from '~/utils'
import * as httpRequest from '~/utils'

export const login = async data => {
    try {
        const response = await httpRequest.post('auth/login', {
            params: { data },
            method: 'post', // or 'PUT'
            headers: {
                'Content-Type': 'application/json'
            }
        })
        return response
    } catch (error) {
        console.error('Error: ', error)
    }
}

export const logout = async token => {
    try {
        const response = await axios({
            url: `${API_ENDPOINT}/api/auth/logout`,
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify('')
        })
        return response
    } catch (error) {
        console.error('Error: ', error)
    }
}
