import axios from "axios"
import { useEffect, useState } from "react"
import styles from './list.module.css'
import Card from "../../../components/module/Card"


const ListProduct = () => {
  const [post, setPost] = useState([])


  const getPost = ()=>{
    axios.get(`${import.meta.env.VITE_API_URL}/posts`)
    .then((res)=>{
      setPost(res.data)
    })
  }
  useEffect(()=>{
    getPost()
  },[])


  const handleDeletePost = (id)=>{
    axios.delete(`${import.meta.env.VITE_API_URL}/posts/${id}`)
    .then(()=>{
      alert('data sudah berhasil dihapus')
      const tempPost = post.filter((item)=> item.id !=id )
      setPost(tempPost)
    })
    .catch(()=>{
      alert('data gagal dihapus')
    })
  }

  const handleUpdatePos = (id) =>{
    console.log(id)
  }

  return (
    <div className={styles.wrapper}>
      <h2>Halaman List Products</h2>
      <div className={styles.wrapperCard}>
          {post.map((item)=>(
            <Card
            key={item.id}
            data={item}
            onDelete={()=> handleDeletePost(item.id)}
            onUpdate={()=> handleUpdatePos(item.id)}
            />
          ))}
      </div>
    </div>
  )
}

export default ListProduct