
export const validEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)

export const isStrongPassword = (password) => /^(?=.*[A-Za-z])(?=.*\d).{6,}$/.test(password)