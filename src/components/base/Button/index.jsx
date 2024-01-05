import styles from './button.module.css'

const Button = ({onClick, color = "primary", className, children}) => {

  return (
    // <button className={styles.btn}>{title}</button>
    <button className={`${styles.btn} ${className ? className: ''}` }  onClick={onClick}>
      {children}
    </button>
  )
}

export default Button