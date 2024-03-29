import React, { useState } from "react";
import { CreateUser } from "../../api/CreateUser";
import style from "./CreateUser.module.css";
import { TUser } from "../../api/GetAllUser";

interface AddUserProps {
  onAddUser: (newUser: TUser) => void;
}

export const CreateNewUser: React.FC<AddUserProps> = ({ onAddUser }) => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const onSubmitHanlder = async (event: React.FormEvent) => {
    event.preventDefault();
    const newUser = await CreateUser(name, email, password);
    onAddUser(newUser);
    setName("");
    setEmail("");
    setPassword("");
  };

  return (
    <form onSubmit={onSubmitHanlder} className={style.form}>
      <label className={style.label} htmlFor="name">
        Name
      </label>
      <input
        className={style.input}
        id="name"
        value={name}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setName(e.target.value);
        }}
      />
      <label className={style.label} htmlFor="email">
        Email
      </label>
      <input
        className={style.input}
        id="email"
        value={email}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setEmail(e.target.value);
        }}
      />
      <label className={style.label} htmlFor="password">
        Password
      </label>
      <input
        className={style.input}
        id="password"
        value={password}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setPassword(e.target.value);
        }}
      />
      <button type="submit" className={style.button}>
        Create user
      </button>
    </form>
  );
};
