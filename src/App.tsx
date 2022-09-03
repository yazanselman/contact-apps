import { useState } from "react";
import "./App.css";
import List from "./List";

function App() {
  const [users, setUsers] = useState([
    {
      name: "selman",
      phoneNumber: "1234",
    },
  ]);

  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleName = (event: any) => {
    setName(event.target.value);
  };

  const handleNumber = (event: any) => {
    setPhoneNumber(event.target.value);
  };
  const addUser = () => {
    setUsers([...users, { name, phoneNumber }]);

    setName("");
    setPhoneNumber("");
  };

  return (
    <>
      <div className="container">
        <div className="App"> Contact List App</div>

        <div className="list">
          <List data={users}></List>
        </div>
        <div className="body">
          <div className="name">
            <input
              placeholder="enter name"
              className="textfield1"
              value={name}
              onChange={handleName}
            ></input>
          </div>
          <div className="phonenumber">
            <input
              placeholder="enter phone number"
              value={phoneNumber}
              onChange={handleNumber}
            ></input>
          </div>
          <div className="add">
            <button onClick={addUser}>Add</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
