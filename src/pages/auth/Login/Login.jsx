import React, { useState } from "react";
import styles from "./login.module.css";
import Input from "../../../components/base/Input";
import Button from "../../../components/base/Button";

import {useNavigate} from 'react-router-dom'
import { useSelector, useDispatch } from "react-redux";
import { login } from "../../../configs/redux/action/userAction";

const Login = () => {
  const {loading} = useSelector((state)=>state.user)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [form, setForm] = useState({
    email: '',
    password: '',
  })

  const handleLogin = async()=>{
    try {
      const user = await dispatch(login(form))
      console.log('data user =', user);
      navigate('/main/profile')
    } catch (error) {
      // console.log(error);
      // console.log('test')
      alert(error.data.message)
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
        <h1 className={styles.title}>halaman login</h1>
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
