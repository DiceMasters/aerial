import { SET_AUTH, SET_USER } from './consts'

const defaultState = {
  user: {},
  isAuth: false
}

export const userReducer = (state = defaultState, action) => {
  switch (action.type) {
    case SET_AUTH:
      return {...state, isAuth: action.payload}

    case SET_USER:
      return {...state, user: action.payload}

    default:
      return state
  }
}

export const setAuth = (payload) => ({
  type: SET_AUTH,
  payload
})
export const setUser = (payload) => ({
  type: SET_USER,
  payload
})
