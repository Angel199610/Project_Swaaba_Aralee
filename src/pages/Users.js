// src/pages/Users.js
import React, { useState } from 'react';
import UserForm from '../components/Login';

const Users = () => {
  const [users, setUsers] = useState([]);

  const handleUserSubmit = (user) => {
    setUsers([...users, user]);
  };

  return (
    <div>
      <h1>Users</h1>
      <UserForm onSubmit={handleUserSubmit} />
      <ul>
        {users.map((user, index) => (
          <li key={index}>{user.firstName} {user.lastName} - {user.email}</li>
        ))}
      </ul>
    </div>
  );
};

export default Users;
