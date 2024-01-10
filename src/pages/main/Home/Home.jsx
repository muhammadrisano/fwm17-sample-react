import React, { useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [name, setName] = useState('')

  const handleSave = ()=>{
    localStorage.setItem('name', name)
    alert('berhasil menyimpan data di localstoge')
    // setName('')
  }
  const handleRemove = ()=>{
    localStorage.removeItem('name')
  }
  return (
    <div>
      <h1>halamn home</h1>

      {/* <a href="/login">login</a> */}
      <Link to="/login">login</Link>
      <hr />
      <p>belajar menggunakan localstore</p>
      <p>data di State Name: {name}</p>
      <label>
        Nama:
        <input type="text" id="name" placeholder="Nama" value={name} onChange={(e)=>setName(e.target.value)} />
      </label>
      <button onClick={handleSave}>Simpan</button>
      <button onClick={handleRemove}>hapus</button>
    </div>
  );
};

export default Home;
