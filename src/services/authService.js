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
        return response.data
    } catch (error) {
        console.error('Error: ', error)
    }
}
