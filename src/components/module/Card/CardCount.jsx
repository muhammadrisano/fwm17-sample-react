import React from 'react'
import {useSelector} from 'react-redux'

const CardCount = () => {
  const stateGlo = useSelector((state)=>state)
  return (
    <div style={{border: '1px solid black', width: '150px', height: '50px', borderRadius: '18px'}}>
      {/* Total Count: {stateGlo.count} */}
    </div>
  )
}

export default CardCount