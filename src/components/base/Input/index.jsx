import PropTypes from "prop-types";
import styles from "./input.module.css";

const Input = ({ type = "text", label, placeholder, ...props }) => {
  
  return (
    <label className={styles.wrapper}>
      <span>{label}</span>
      <input {...props} placeholder={placeholder} type={type} />
    </label>
  );
};

Input.propTypes = {
  type: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string.isRequired,
};

export default Input;
