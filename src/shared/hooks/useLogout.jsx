export const logout = () => {
    localStorage.removeItem('user')
    localStorage.removeItem('name')
    window.location.href = './auth'
} 