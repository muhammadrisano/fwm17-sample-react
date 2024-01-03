// import React from 'react'
import {Fragment, useState, useEffect} from 'react'
import Button from './components/base/Button/Button';
import Input from './components/base/Input/Input';

const dataUser = {
  name: 'risano',
  email: 'risano@gmail.com',
  jender: 'laki-laki'
}

const App = () => {

  const [user, setUser] = useState({})
  const [title, setTitle] = useState("")
  const [count, setCount] = useState(0)

  // inputan
  const [fullname, setFullname] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  useEffect(()=>{
    handleShowUser()
    cobaDepedensiUE()
  },[fullname])

  const handleIncrement = ()=>{
    setCount(count + 1)
  }
  const handleDecrement = ()=>{
    setCount(count - 1)
  }
  const handleLogin = (e)=>{
    console.log(e);
    alert(`name = ${fullname} , email = ${email} dan password = ${password}`)
  }
  const handleChangeFullname= (e)=>{
    setFullname(e.target.value)
  }
  const cobaDepedensiUE=()=>{
    alert(`anda telah melakukan perubahan data fullanem = ${fullname}`)
  }

  const handleShowUser = ()=>{
    // request ke be melalui res api
    // data user nya dapa
    setUser(dataUser)
  }

  
  return (
    <Fragment>
      <div>
        <h1>{title}</h1>
        <p>helo my name risano</p>
      </div>
      <div>
        <button onClick={handleDecrement}>-</button>
        <span>Nilai: {count}</span>
        <button onClick={handleIncrement}>+</button>
      </div>
      <div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus,
          facilis!
        </p>
        <button onClick={()=>setTitle("belajar javasript")}>Edit Judul</button>
        <Input
        type="text"
        placeholder='Nama Lengkap'
        value={fullname}
        onChange={handleChangeFullname}
        />
        <Input 
        type="email"
        placeholder='email'
        value={email}
        onChange={(e)=>setEmail(e.target.value)}
        />
        <Input
        type="password"
        placeholder='password'
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
        />
        <Button onClick={handleLogin}>Login</Button>
        <hr />
        <h2>biodata saya</h2>
        <ul>
          <li>Nama: {user.name}</li>
          <li>Email: {user.email}</li>
          <li>Jender: {user.jender}</li>
          {/* <button onClick={handleShowUser}>Show User</button> */}
        </ul>
      </div>
    </Fragment>
  );
};

export default App;
