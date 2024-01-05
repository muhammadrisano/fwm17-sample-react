import React, { useState } from "react";
import styles from "./login.module.css";
import Input from "../../../components/base/Input";
import Button from "../../../components/base/Button";
import axios from "axios";
import {useNavigate} from 'react-router-dom'

const Login = () => {

  const navigate = useNavigate()
  const [form, setForm] = useState({
    email: '',
    password: '',
  })

  const handleLogin = ()=>{
    // eslint-disable-next-line no-undef
    // axios.post(`${import.meta.env.VITE_APP_API_URL}/login`, {
    //   email: form.email,
    //   password: form.password
    // })
    // .then((res)=>{
      // localStorage.setItem('token', res.data.token)
      navigate('/main/profile')
    // })
    // .catch(()=>{
    //   alert('maaf password anda salah')
    // })
  }
  return (
    <div>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>halaman login</h1>
        <div className={styles.wrapperForm}>
          <Input type="email" placeholder="Email" label="Email" value={form.email} onChange={(e) => setForm({...form, email: e.target.value})}  />
          <Input type="password" placeholder="Password" label="Password" value={form.password} onChange={(e)=> setForm({...form, password: e.target.value})} />
          <Button onClick={handleLogin}>Login</Button>
        </div>
      </div>
    </div>
  );
};

export default Login;
