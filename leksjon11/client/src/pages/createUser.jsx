import React, { useState } from "react";
import { Input, FormControl, Button, FormLabel } from "@chakra-ui/core";
import { create } from "../utils/userService.js";

const CreateUser = () => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  const emailHandler = (e) => {
    setEmail(e.target.value);
  };

  const passwordHandler = (e) => {
    setPassword(e.target.value);
  };

  const submitHandler = async (e) => {
    const data = {
      email,
      password,
    };

    // Maybe some errorhandling here, data !== null or email && password not equal null

    await create(data);
  };

  return (
    <div>
      <FormControl>
        <FormLabel htmlFor="email">E-mail</FormLabel>
        <Input type="email" id="email" onChange={emailHandler} />
        <FormLabel htmlFor="password" id="password">
          Password
        </FormLabel>
        <Input type="password" onChange={passwordHandler} />
      </FormControl>
      <Button onClick={submitHandler}>Submit</Button>
    </div>
  );
};

export default CreateUser;
