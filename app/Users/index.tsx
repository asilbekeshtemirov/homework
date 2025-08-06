import { getUser } from "@/api";
import { User } from "@/types";
import React, { useEffect, useState } from "react";

import cls from "./Users.module.css";

const UsersPage = () => {
  const [users, setUsers] = useState<User[]>([]);
  useEffect(() => {
    getUser()?.then((res) => {
      if (res) setUsers(res.data);
    });
  }, []);
  return (
    <div className="container">
      <h1>Users</h1>
      <div className={cls.usersContainer}>
        {users.map((user) => (
          <div key={user.id} className={cls.user}>
            <div className={cls.userId}>ID: {user.id}</div>
            <div className={cls.userInfo}>
              <h3 className={cls.userName}>{user.name}</h3>
              <p className={cls.userEmail}>{user.email}</p>
              <p>City: {user.address.city}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UsersPage;
