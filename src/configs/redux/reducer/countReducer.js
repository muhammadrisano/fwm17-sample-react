const initialState = {
  name: 'risano akbar',
  count: 0,
}

const countReducer = (state = initialState, action)=>{
  if(action.type === 'INCREMENT'){
    return {
      ...state,
      count: state.count + 1
    }
  }else if(action.type === 'DECREMENT'){
    return {
      ...state,
      count: state.count - 1
    }
  }else if(action.type === 'CHANGE_NAME'){
    return{
      ...state,
      name: action.payload
    }
  }else
  return state
}

export default countReducer