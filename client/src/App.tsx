import { Fragment } from "react";
import { Header } from "./components/header/Header";
import "./App.css";
import { UserList } from "./components/user/UserList";

function App() {
  return (
    <Fragment>
      <Header />
      <UserList />
    </Fragment>
  );
}

export default App;
