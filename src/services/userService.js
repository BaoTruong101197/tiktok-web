import * as httpRequest from '~/utils'

export const getSuggested = async (page = 1, perPage = 20) => {
    try {
        const response = await httpRequest.get('users/suggested', {
            params: {
                page,
                per_page: perPage
            }
        })
        return response.data
    } catch (error) {
        console.log(error)
    }
}

export const getUser = async (nickname = '') => {
    try {
        const response = await httpRequest.get(`users/@${nickname}`)
        return response.data
    } catch (error) {
        console.log(error)
    }
}
