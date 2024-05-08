import axios from "axios";
import React, { useEffect, useState } from "react";
import userimg from "../../images/user.png";
import { Link } from "react-router-dom";
import './style.css'


function AdminHome() {
  const baseURL = "http://127.0.0.1:8000";
  const [users, setUsers] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const fetchUsers = (url) => {
    axios.get(url).then((response) => {
        const filteredUsers = response.data.results.filter(user => !user.is_superuser);
        console.log(filteredUsers);
         setUsers(filteredUsers);
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
      });
  };



  const handleSearch = (query) => {
    setSearchQuery(query);
    fetchUsers(`${baseURL}/api/accounts/admin/users/?search=${query}`);
  };

  
  useEffect(() => {
    fetchUsers(baseURL + "/api/accounts/admin/users/");
  }, []);

  useEffect(() => {
    fetchUsers(`${baseURL}/api/accounts/admin/users/?search=${searchQuery}`);
  }, [searchQuery]);

  return (
    <>
      <div className="container home"  >
        <div className="d-flex justify-content-between" style={{marginTop:50,marginBottom:30}}>
        <h3 className="my-4 mx-2 ">User Details</h3>
        <input
          type="text"
          placeholder="Search Here..."
          value={searchQuery}
          className="form-control"
          onChange={(e) => handleSearch(e.target.value)}
          style={{width:320, height:40, marginTop:30,padding:10}}
        />
        
        <Link className="btn btn-dark my-4" to='user/create'>Create User</Link>
        </div>
        <table className="table align-middle mb-0 bg-white table-responsive">
          <thead className="bg-light">
            <tr>
              <th>Name</th>
              <th>Phone</th>
              <th>Active Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users == "" && <tr><td>No Users Found Your Match</td></tr>}


            {users.map((user) => (
              <tr key={user.id}>
                <td>
                  <div className="d-flex align-items-center">
                    <img
                      src={
                        user.User_Profile
                          ? user.User_Profile.profile_pic
                          : userimg
                      }
                      className="rounded-circle"
                      alt=""
                      style={{ width: "45px", height: "45px" }}
                    />
                    <div className="ms-3">
                      <p className="fw-bold mb-1">{user.first_name}</p>
                      <p className="text-muted mb-0">{user.email}</p>
                    </div>
                  </div>
                </td>

                <td>
                  <span className="badge badge-primary rounded-pill d-inline">
                    {user.phone_number}
                  </span>
                </td>
                <td>
                <span className={`badge rounded-pill d-inline ${user.is_active ? 'badge-success' : 'badge-danger'}`}>
                  {user.is_active ? 'Active' : 'Blocked'}
                </span>
                </td>

                <td>
                  {/* Edit */}

                  
                  <Link
                    type="button"
                    className="btn btn-link btn-rounded btn-sm fw-bold"
                    to={`user/update/${user.id}`}
                  >
                    Edit
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default AdminHome;
