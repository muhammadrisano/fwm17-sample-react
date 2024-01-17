import axios from "axios";
import { useEffect, useState } from "react";
import styles from "./list.module.css";
import Card from "../../../components/module/Card";
import { getProducts } from "../../../configs/redux/action/productAction";
import { useSelector, useDispatch } from "react-redux";
import useDebounce from "../../../hooks/UseDebounce";

const ListProduct = () => {
  // const [post, setPost] = useState([]);
  // const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState('')
  const [params, setParams] = useState({
    page: 1,
    limit: 2,
    search: '',
    sort:'name',
    sortBy: 'ASC'
  })
  const dispatch = useDispatch()
    const {loading, productList} = useSelector((state)=>state.product)



  // const getPost = () => {
  //   setLoading(true);
  //   axios.get(`${import.meta.env.VITE_API_URL}/posts`).then((res) => {
  //     setLoading(false);
  //     setPost(res.data);
  //   });
  // };

  useDebounce(() => {
    setParams({
      ...params,
      search: search
    })
  },[search], 1500)


  useEffect(() => {

    const {page, limit,search, sort, sortBy } = params
    dispatch(getProducts({page,limit,search, sort, sortBy }))
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, params]);

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
  const handleNextPage=()=>{
    setParams({
      ...params,
      page: params.page + 1
    })
  }
  const handlePrevPage = ()=>{
    setParams({
      ...params,
      page: params.page - 1
    })
  }

  const handleSetLimit = (e)=>{
    setParams({
      ...params,
      limit: e.target.value
    })
  }

  const handleSorting = (e) =>{
    const value = e.target.value
    if(value === 'price-up'){
      setParams({
        ...params,
        sort: 'price',
        sortBy: 'ASC'
      })
    }else if(value === 'price-down'){
      setParams({
        ...params,
        sort: 'price',
        sortBy: 'DESC'
      })
    }else if(value === 'stock-up'){
      setParams({
        ...params,
        sort: 'stock',
        sortBy: 'ASC'
      })
    }else if(value === 'stock-down'){
      setParams({
        ...params,
        sort: 'stock',
        sortBy: 'DESC'
      })
    }
  }

  const handleSeach = (e)=>{
    setParams({
      ...params,
      search: e.target.value
    })
  }

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
      <div>
        <label htmlFor="sorting">Sorting by</label>
        <select name="" id="sorting" onChange={handleSorting}>
        <option value=""> - pilih -</option>
          <option value="price-up">Urutkan Harge Terendah</option>
          <option value="price-down">Urutkan Harge Tertinggi</option>
          <option value="stock-up">Urutkan Stock Terendah</option>
          <option value="stock-down">Urutkan Stock Tertinggi</option>

       </select>
      </div>
      <div>
        <label htmlFor="search">Search</label>
        <input type="text" placeholder="search" onChange={(e)=>setSearch(e.target.value)} />
      </div>

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
         

      <div style={{marginTop: '200px'}}>
        <div>
        <label htmlFor="show"> Show Data:</label>
           
           <select id="show" onChange={handleSetLimit}>
             <option value="2">2</option>
             <option value="5">5</option>
             <option value="10">10</option>
             <option value="100">100</option>
           </select>
        </div>
        <div>
        <button onClick={handlePrevPage}>Prev</button>
        <button onClick={handleNextPage}>Next</button>
        </div>
        
      </div>
      <p>Page: {params.page}</p>
    </div>
  );
};

export default ListProduct;
