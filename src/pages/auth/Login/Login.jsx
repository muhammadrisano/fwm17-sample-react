import React, { useState } from "react";
import styles from "./login.module.css";
import Input from "../../../components/base/Input";
import Button from "../../../components/base/Button";
import axios from "axios";
import {useNavigate} from 'react-router-dom'
import { useSelector } from "react-redux";

const Login = () => {
  const {name} = useSelector((state)=>state)
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)
  const [form, setForm] = useState({
    email: '',
    password: '',
  })

  const handleLogin = async()=>{
    try {
      setLoading(true)
      const response = await axios.post('http://localhost:4000/v1/users/login', {
        email: form.email,
        password: form.password
      })
      const user = response.data.data
      localStorage.setItem('token', user.token)
      localStorage.setItem('refresh-token', user.token)
      setLoading(false)
      alert('berhasil login')
      navigate('/main/profile')
    } catch (error) {
      const message = error.response.data.message
      alert(message)
      setLoading(false)
    }
  
  

  }

  // if(localStorage.getItem('name')){
  //   return (
  //   <h1>Selamat Datang bro.. {localStorage.getItem('name')}</h1>
  //   )
  // }
  
  return (
    <div>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>halaman login {name}</h1>
        <div className={styles.wrapperForm}>
          <Input type="email" placeholder="Email" label="Email" value={form.email} onChange={(e) => setForm({...form, email: e.target.value})}  />
          <Input type="password" placeholder="Password" label="Password" value={form.password} onChange={(e)=> setForm({...form, password: e.target.value})} />
          <Button className="bg-dark" onClick={handleLogin}>{loading ? 'loading...' : 'login'}</Button>
        </div>
      </div>
    </div>
  );
};

export default Login;
