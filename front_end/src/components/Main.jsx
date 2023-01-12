import React, { useEffect } from "react";
import axios from "axios";

const Main = () => {
  const newUserDetails = {
    userName: "NewUser",
    firstName: "First_name",
    lastName: "Last_name",
    email: "vijay@gmail.com",
    age: 21,
    phoneNumber: 7093051559,
    roleId: 2,
  };

  const AddUser = () => {
    axios
      .post("http://localhost:5000/addUser", newUserDetails)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    axios
      .get("http://localhost:5000/getUser")
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  return (
    <div>
      <div className="add">
        <input type="text" name="user_name" placeholder="user_name" />
        <button onClick={AddUser}>Add User</button>
      </div>
      <div className="filter">
        <input type="text" name="Keyword" id="" placeholder="search for user" />
        <button>Search</button>
      </div>
      <table>
        <thead>
          <tr>
            <td>User Name</td>
            <td>First Name</td>
            <td>Last Name</td>
            <td>Email</td>
            <td>Age</td>
            <td>Phone Number</td>
            <td>Role id</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Main;
