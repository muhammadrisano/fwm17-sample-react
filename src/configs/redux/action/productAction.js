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