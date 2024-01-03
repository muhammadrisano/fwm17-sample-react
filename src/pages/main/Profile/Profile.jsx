import React, { useState, useEffect } from "react";
import axios from "axios";
import "./profile.css";
const Profile = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUser();
  }, []);

  const getUser = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        setUsers(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="wrapper">
      <h1>Halaman Profile</h1>
      <div
        className="wrapper-card"
        style={{ display: "flex", flexWrap: "wrap", gap: "16px" }}
      >
        {users.map((item) => (
          <div class="card" key={item.id} style={{ border: "1px solid black" }}>
            <div class="card-body">
              <h5 class="card-title">{item.name}</h5>
              <ul>
                <li>Username: {item.username}</li>
                <li>Email: {item.email} </li>
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Profile;
