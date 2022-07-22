import React, { useState } from "react";
import Input from "../lib/components/Input";
import { client } from "../lib/services/client";

const Register = () => {
  const [registerData, setRegisterData] = useState({});
  const registerField = [
    {
      label: "Email",
      name: "email",
      type: "email",
    },
    {
      label: "Username",
      name: "username",
      type: "username",
    },
    {
      label: "Password",
      name: "password",
      type: "password",
    },
  ];

  const handleChange = (e) => {
    let target = e.target;

    setRegisterData((prevState) => {
      let state = prevState;
      state[target.name] = target.value;

      return state;
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(registerData);
  };
  return (
    <div className="p-5 lg:px-10">
      <h1 className="block w-full mb-5 text-xl font-semibold lg:text-3xl">
        Register
      </h1>
      <form onSubmit={handleSubmit}>
        {registerField.map((field, i) => (
          <Input key={i} data={field} handleChange={handleChange} />
        ))}
        <button
          type="submit"
          className="px-5 py-2 mt-5 text-xs font-medium text-white transition-transform duration-200 bg-blue-400 rounded-md hover:scale-105"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
