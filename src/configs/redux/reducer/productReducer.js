const initialState = {
  pruduct:{},
  productList: [],
  loading: false,
  error: null
}

const productReducer = (state =initialState, action)=>{
  switch (action.type) {
    case 'ADD_PRODUCT':
    return {
      ...state,
      productList: [
        ...state.productList,
        action.payload
      ]
    }
    case 'REMOVE_PRODUCT':
      return {
        ...state,
        productList: state.productList.filter((item)=>item.id != action.payload)
      }
    default:
      return state
  }
}

export default productReducer