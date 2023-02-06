function useLocalStorage() {
    const userData = localStorage.getItem('user-sign-in')
    if (userData) {
        return JSON.parse(userData)
    }
    return undefined
}

export default useLocalStorage
