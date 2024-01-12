import api from "../../api"

const tungguDulu = (time)=>{
  return new Promise((resolve)=>{
    setTimeout(()=>{
      resolve('selsai')
    },time)
  })
 
}

export const addProduct = (product)=> async(dispatch)=>{
  await tungguDulu(2000)
  dispatch({
    type: "ADD_PRODUCT",
    payload: product,
  })
}

export const removeProduct = (id)=>(dispatch)=>{
  dispatch({
      type: 'REMOVE_PRODUCT',
      payload: id
    })
}

export const getProducts = (params)=> async (dispatch)=>{
  try {
    dispatch({
      type: 'GET_PRODUCTS_REQUEST',
    })
    const response = await api.get('/products')
    const products =  response.data.data
    dispatch({
      type: 'GET_PRODUCTS_SUCCESS',
      payload: products
    })

  } catch (error) {
    dispatch({
      type: 'GET_PRODUCTS_FAILURE',
      payload: error.response.data.message
    })
  }
  api.get('/products')
}