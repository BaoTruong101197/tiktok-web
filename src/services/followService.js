import * as httpRequest from '~/utils'

export const followUser = async (userId, token) => {
    try {
        const response = await httpRequest.post(`users/${userId}}/follow`, {
            method: 'post', // or 'PUT'
            params: { data: userId },
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
