import {setAuth, setUser} from './../userReducer'
import AuthService from './../../services/AuthService'
import axios from 'axios'
import { API_URL } from '../../http'

export const login = async (email, password) => {
  try {
    const response = await AuthService.login(email, password)

    localStorage.setItem('token', response.data.accessToken)
    setAuth(true)
    setUser(response.data.user)

    return(response)
  } catch (error) {
    console.log(error)
  }
}

export const register = async (email, password) => {
  try {
    const response = await AuthService.registration(email, password)

    localStorage.setItem('token', response.data.accessToken)
    setAuth(true)
    setUser(response.data.user)

    return response
  } catch (error) {
    console.log(error)
  }
}

export const logout = async () => {
  try {
    await AuthService.logout()

    localStorage.removeItem('token')
    setAuth(false)
    setUser({})
  } catch (error) {
    console.log(error)
  }
}

export const checkAuth = async () => {
  try {
    const response = await axios.get(`${API_URL}/refresh`)


  } catch (error) {
    console.log(error)
  }
}
