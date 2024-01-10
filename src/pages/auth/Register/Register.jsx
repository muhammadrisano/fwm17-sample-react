
import axios from 'axios'
import { useState } from 'react'
import {useNavigate} from 'react-router-dom'
import styles from './register.module.css'
import Input from '../../../components/base/Input'
import Button from '../../../components/base/Button'


const Register = () => {
  const navigate = useNavigate()
  const [form, setForm] = useState({
    email: '',
    fullname: '',
    password: '',
  })
  const hanleRegister = ()=>{
    axios.post('http://localhost:4000/v1/users/register', {
      email: form.email,
      fullname: form.fullname,
      password: form.password
    })
    .then((res)=>{
      alert('semamat anda berhasil mendaftara')
      navigate('/login')
    })
    .catch((err)=>{
      const response = err.response.data.message
      alert(response)
    })
  }
  return (
    <div>
    <div className={styles.wrapper}>
      <div className={styles.wrapperForm}>
        <Input type="email" placeholder="Email" label="Email" value={form.email} onChange={(e) => setForm({...form, email: e.target.value})}  />
        <Input type="text" placeholder="FullName" label="Full name" value={form.fullname} onChange={(e) => setForm({...form, fullname: e.target.value})}  />
        <Input type="password" placeholder="Password" label="Password" value={form.password} onChange={(e)=> setForm({...form, password: e.target.value})} />
        <Button className="bg-dark" onClick={hanleRegister}>Register</Button>
      </div>
    </div>
  </div>
  )
}

export default Register