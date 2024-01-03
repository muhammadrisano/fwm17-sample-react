import React from 'react'
import {useParams} from 'react-router-dom'

const Products = () => {
  const {id} = useParams()
  return (
    <div>
      <h1>halmana product dengan ID = "{id}"</h1>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae modi quibusdam illo et tenetur nulla repellendus, ipsam officia commodi a ipsa optio nemo, excepturi explicabo corporis temporibus. Quos et ab odit commodi nemo deleniti, tenetur repudiandae vel impedit sit consequuntur, odio itaque harum quae reprehenderit temporibus! Debitis ab amet magnam nobis excepturi quam repellat, repellendus, eligendi nisi necessitatibus non perferendis eius. Accusamus facere, dolores quod reprehenderit ad vero recusandae mollitia optio magni at pariatur, modi aliquid repellat quam fugit, id rerum doloremque obcaecati harum eveniet! Commodi vitae odio consequuntur eos architecto eligendi eveniet maxime omnis molestiae voluptatibus. Tempora, aut labore.</p>
      <button className='btn btn-primary'>Simpan</button>

    </div>
  )
}

export default Products