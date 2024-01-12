import axios from "axios";
import { useEffect, useState } from "react";
import styles from "./list.module.css";
import Card from "../../../components/module/Card";
import { getProducts } from "../../../configs/redux/action/productAction";
import { useSelector, useDispatch } from "react-redux";

const ListProduct = () => {
  // const [post, setPost] = useState([]);
  // const [loading, setLoading] = useState(false);
  const dispatch = useDispatch()
    const {loading, productList} = useSelector((state)=>state.product)



  // const getPost = () => {
  //   setLoading(true);
  //   axios.get(`${import.meta.env.VITE_API_URL}/posts`).then((res) => {
  //     setLoading(false);
  //     setPost(res.data);
  //   });
  // };
  useEffect(() => {
    dispatch(getProducts())
  }, []);

  // const handleDeletePost = (id) => {
  //   axios
  //     .delete(`${import.meta.env.VITE_API_URL}/posts/${id}`)
  //     .then(() => {
  //       alert("data sudah berhasil dihapus");
  //       const tempPost = post.filter((item) => item.id != id);
  //       setPost(tempPost);
  //     })
  //     .catch(() => {
  //       alert("data gagal dihapus");
  //     });
  // };

  // const handleUpdatePos = (id) => {
  //   console.log(id);
  // };

  return (
    <div className={styles.wrapper}>
      <h2>Halaman List Products</h2>
      {/* {loading ? (
        <h4>Loading.....</h4>
      ) : (
        <div className={styles.wrapperCard}>
          {post.map((item) => (
            <Card
              key={item.id}
              data={item}
              onDelete={() => handleDeletePost(item.id)}
              onUpdate={() => handleUpdatePos(item.id)}
            />
          ))}
        </div>
      )} */}

      {loading && <h3>loading....</h3>}
      <div className={styles.wrapperCard}>
        {productList.map((item) => (
          <Card
            key={item.id}
            data={item}
            // onDelete={() => handleDeletePost(item.id)}
            // onUpdate={() => handleUpdatePos(item.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default ListProduct;
