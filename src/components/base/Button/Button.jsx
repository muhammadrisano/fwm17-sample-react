import styles from './button.module.css'

const Button = ({onClick, children}) => {

  return (
    // <button className={styles.btn}>{title}</button>
    <button className={styles.btn} onClick={onClick}>
      {children}
    </button>
  )
}

export default Button