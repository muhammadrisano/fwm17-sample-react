
const Input = ({type = "text", ...props}) => {

// const seting = {
//   placeholder:"testing...."
// }
  return (
    <div>
    
      <input {...props} className="btn" type={type} />
    </div>
  )
}

export default Input