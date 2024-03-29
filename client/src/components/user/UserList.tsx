import { Fragment, useEffect, useState } from "react";
import style from "./UserList.module.css";
import { TUser } from "../../api/GetAllUser";
import { GetAllUser } from "../../api/GetAllUser";
import { CreateNewUser } from "./CreateNewUser";
import { deleteUser } from "../../api/DeleteUser";

export const UserList = () => {
  const [user, setUser] = useState<TUser[]>([]);

  useEffect(() => {
    const fetchItem = async () => {
      const users = await GetAllUser();
      window.localStorage.setItem("mydata", JSON.stringify(user));
      setUser(users);
    };
    fetchItem();
  }, []);

  useEffect(() => {
    const data = window.localStorage.getItem("mydata");
    if (data !== null) setUser(JSON.parse(data));
  }, []);

  const addUserHanlder = (newUser: TUser) => {
    setUser((prevUser) => [...prevUser, newUser]);
  };

  const deleteUserHandler = async (_id: string) => {
    await deleteUser(_id);
    setUser(user.filter((user) => user._id !== _id));
  };

  return (
    <Fragment>
      <CreateNewUser onAddUser={addUserHanlder} />
      {user.map((user) => (
        <li key={user._id} className={style.users}>
          <p>Name {user.name}</p>
          <p>Email {user.email}</p>
          <p>Account {user._id}</p>
          <button onClick={() => deleteUserHandler(user._id)}>Delete</button>
        </li>
      ))}
    </Fragment>
  );
};
