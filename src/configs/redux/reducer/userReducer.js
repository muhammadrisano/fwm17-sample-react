const initialState = {
  user: {},
  loading: false,
  error: ''
}
const userReducer = (state = initialState, action)=>{
  switch (action.type) {
    // case 'GET_USER_REQUEST':
    // return{
    //   ...state,
    //   loading: true
    // }
    // case 'GET_USER':
    // return {
    //   ...state,
    //   // loading: false,
    //   user: action.payload
    // }
    // case 'GET_USER_FAILURE':
    // return{
    //   ...state,
    //   loading: false,
    //   error: action.payload
    // }
    case 'LOGIN_REQUEST':
      return {
        ...state,
        loading: true
      }
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        loading: false,
        user: action.payload
      }
    case 'LOGIN_FAILURE':
      return {
        ...state,
        loading: false,
        error: action.payload
      }
    default:
     return state
  }
}

export default userReducer