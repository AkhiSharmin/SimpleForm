import { useState } from "react";

const StateFullForm = () => {
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  const handelSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, password);
  };
  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handelEmailChange = (e) => {
    console.log(e.target.value);
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div>
      <form onSubmit={handelSubmit}>
        <input onChange={handleNameChange} type="text" name="name" />
        <br />
        <input onChange={handelEmailChange} type="email" name="email" id="" />
        <br />
        <input
          onChange={handlePasswordChange}
          type="password"
          name="password"
          id=""
        />
        <br />
        <input type="submit" value="submit" />
      </form>
    </div>
  );
};

export default StateFullForm;
