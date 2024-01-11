import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {addProduct, removeProduct} from '../../../configs/redux/action/productAction'

const AppProducts = () => {
  const dispatch = useDispatch();
  const stateGloProduct = useSelector((state) => state.product);

  const [product, setProduct] = useState({
    name: "",
    description: "",
    price: "",
    stock: "",
  });

  const handleChange = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    });
  };

  const handleAddProduct = () => {
    dispatch(addProduct(product));
    alert("berhasil tambah product");
    setProduct({
      id: "",
      name: "",
      description: "",
      price: "",
      stock: "",
    });
  };

  const handleRemoveProduct = (id)=>{
    dispatch(removeProduct(id))
    alert('product berhasil dihapus')
  }

  return (
    <div style={{ marginTop: "50px" }}>
      <table border="1">
        <tr>
          <th>No</th>
          <th>Name</th>
          <th>Description</th>
          <th>Price</th>
          <th>Stock</th>
          <th>Aksi</th>
        </tr>
        {stateGloProduct.productList.map((item, index) =>(
          <tr key={index}> 
            <td>1</td>
            <td>{item.name}</td>
            <td>{item.description}</td>
            <td>{item.price}</td>
            <td>{item.stock}</td>
            <button onClick={()=>handleRemoveProduct(item.id)}>Remove</button>
          </tr>
        ))}
      </table>
      <h2>add product</h2>

      <ul>
      <li>
          <input
            type="number"
            placeholder="ID product"
            name="id"
            value={product.id}
            onChange={handleChange}
          />
        </li>
        <li>
          <input
            type="text"
            placeholder="name product"
            name="name"
            value={product.name}
            onChange={handleChange}
          />
        </li>
        <li>
          <input
            type="text"
            placeholder="description"
            name="description"
            value={product.description}
            onChange={handleChange}
          />
        </li>
        <li>
          <input
            type="number"
            placeholder="price"
            name="price"
            value={product.price}
            onChange={handleChange}
          />
        </li>
        <li>
          <input
            type="number"
            placeholder="stock"
            name="stock"
            value={product.stock}
            onChange={handleChange}
          />
        </li>
      </ul>
      <button onClick={handleAddProduct}>Add Product</button>
    </div>
  );
};

export default AppProducts;
