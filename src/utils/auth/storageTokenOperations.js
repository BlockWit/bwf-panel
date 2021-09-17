const TOKEN_STORAGE_KEY = "BWF-Panel-jwt";

export const setTokenToStorage = (token) => localStorage.setItem(TOKEN_STORAGE_KEY, token);

export const removeTokenFromStorage = () => localStorage.removeItem(TOKEN_STORAGE_KEY);

export const getTokenFromStorage = () => localStorage.getItem(TOKEN_STORAGE_KEY);

export const isTokenInStorage = () => !!getTokenFromStorage()