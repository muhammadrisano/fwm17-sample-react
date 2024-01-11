import axios from "axios"

export const login = (data)=>  async (dispatch)=>{
  // return new Promise(async(resolve, reject)=>{
    try {
      dispatch({type: 'LOGIN_REQUEST'})
      const response = await axios.post('http://localhost:4000/v1/users/login', data)
      const user = response.data.data
      dispatch({type: 'LOGIN_SUCCESS', payload:user })
      return user
    } catch (error) {
      dispatch({type: 'LOGIN_FAILURE', payload: error.response.data.message})
      throw error.response
    } 

}