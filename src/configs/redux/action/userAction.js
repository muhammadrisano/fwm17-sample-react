
import api from "../../api"

export const login = (data)=>  async (dispatch)=>{
  // return new Promise(async(resolve, reject)=>{
    try {
      dispatch({type: 'LOGIN_REQUEST'})
      const response = await api.post('/users/login', data)
      const user = response.data.data
      localStorage.setItem('token', user.token)
      localStorage.setItem('refresh-token', user.refreshToken)
      dispatch({type: 'LOGIN_SUCCESS', payload:user })
      return user
    } catch (error) {
      dispatch({type: 'LOGIN_FAILURE', payload: error.response.data.message})
      throw error.response
    } 

}