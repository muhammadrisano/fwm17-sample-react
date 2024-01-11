import React, { useState } from "react";
import { Link } from "react-router-dom";
import Card from "../../../components/module/Card";
import {useSelector, useDispatch} from 'react-redux'
import CardCount from "../../../components/module/Card/CardCount";

const Home = () => {
  const {count} = useSelector((state)=>state.count)
  const dispatch = useDispatch()
  const [name, setName] = useState('')
  const nameBtn = "Simpan"
  const biodata = {
    name: 'rsiano',
    email: 'risa@gmail.com'
  }

  const handleSave = ()=>{
    dispatch({
      type: 'CHANGE_NAME',
      payload: name
    })
    setName('')
  }
  const handleRemove = ()=>{
    localStorage.removeItem('name')
  }

  const handleIncrement = ()=>{
    dispatch({
      type: 'INCREMENT'
    })
  }

  const handleDecrement = ()=>{
    dispatch({
      type: 'DECREMENT'
    })
  }

  
  return (
    <div>
      <h1>halamn home</h1>
      <CardCount/>
      {/* <a href="/login">login</a> */}
      <Link to="/login">login</Link>
      <hr />
      <p>belajar menggunakan localstore</p>
      <p>data di State Name: {name}</p>
      <p>{biodata?.name}</p>
      <label>
        Nama:
        <input type="text" id="name" placeholder="Nama" value={name} onChange={(e)=>setName(e.target.value)} />
      </label>
      <button onClick={handleSave}>Simpan</button>
      <button onClick={handleRemove}>hapus</button>


      <p>nilai count : {count}</p>

      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  );
};

export default Home;
