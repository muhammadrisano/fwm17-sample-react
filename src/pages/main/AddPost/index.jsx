import React, { useState } from 'react'
import Input from '../../../components/base/Input'
import styles from './addpost.module.css'
import Button from '../../../components/base/Button'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'


const AddPost = () => {
  const navigate = useNavigate()
  const [form, setForm] = useState({
    userId: '',
    id: '',
    title: '',
    body: ''
  })

  const handleChange = (e) =>{
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const handleAddPost= ()=>{
    axios.post(`${import.meta.env.VITE_API_URL}/posts`, {
      userId: form.userId,
      id: form.id,
      title: form.title,
      body: form.body
    })
    .then(()=>{
      alert('data berhasil ditambahkan')
      navigate('/main/list')
    })
    .catch((err)=>{
      console.log(err);
      alert('data gagal ditambah')
    })
  }

  return (
    <div className={styles.wrapper}>
      <h3>Halaman Tambah Post</h3>
      <div className={styles.wrapperForm}>
        <Input
        type='number'
        placeholder="ID" 
        label="ID"
        value={form.id}
        name="id"
        onChange={handleChange}
        />
        <Input
        type="number"
        placeholder="user id"
        label="User ID"
        value={form.userId}
        name="userId"
        onChange={handleChange}
        />
        <Input
        type='text'
        placeholder="Title"
        label="Title"
        value={form.title}
        name="title"
        onChange={handleChange}
        />
        <Input
        type='text'
        placeholder="body"
        label="Body"
        value={form.body}
        name="body"
        onChange={handleChange}
        />
        <Button onClick={handleAddPost}>Simpan</Button>
      </div>
    </div>
  )
}

export default AddPost