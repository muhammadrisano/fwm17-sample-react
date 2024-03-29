
import PropsTypes from 'prop-types'
import styles from './card.module.css'
import Button from '../../base/Button'

const Card = ({data, onDelete, onUpdate}) => {
  return (
    <div className={styles.wrapper}>
      <h3>{data.name}</h3>
      <p>Harga :{data.price}</p>
      <p>Stock : {data.stock}</p>
      <div className='flex gap-1'>
        <Button onClick={onUpdate} className="bg-secondary">Edit</Button>
        <Button onClick={onDelete} className="bg-primary"> Delete </Button> 
      </div>
    </div>
  )
}

Card.propTypes = {
  data: PropsTypes.object
}
export default Card