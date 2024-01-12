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
    case 'GET_PRODUCTS_REQUEST':
      return{
        ...state,
        loading: true
      }
    case 'GET_PRODUCTS_SUCCESS':
      return{
        ...state,
        loading: false,
        productList: action.payload
      }
    case 'GET_PRODUCTS_FAILURE':
      return {
        ...state,
        loading: false,
        error: action.payload
      }
    default:
      return state
  }
}

export default productReducer