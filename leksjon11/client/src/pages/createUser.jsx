import React, { useState } from 'react';
import {
  Input,
  FormControl,
  Button,
  FormLabel,
  Heading,
} from '@chakra-ui/core';
import { create } from '../utils/userService.js';

const CreateUser = () => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  const submitHandler = async (e) => {
    e.preventDefault();
    const data = {
      email,
      password,
    };

    /*
     * Added some errorhandling here, not sure if it actually does something. The errorhandling in the form should be enough, as long as something wrong doesn't happen on the backend. Will need to look more into that.
     * Also should have a "this user does not exist" handling
     */
    try {
      await create(data);
      window.location = '/';
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <form onSubmit={submitHandler}>
      <Heading pb={3}>Sign up</Heading>
      <FormControl isRequired>
        <FormLabel htmlFor="email">E-mail</FormLabel>
        <Input
          type="email"
          id="email"
          placeholder="name@company.com"
          onChange={(e) => setEmail(e.currentTarget.value)}
          w={300}
        />
      </FormControl>
      <FormControl isRequired>
        <FormLabel htmlFor="password" id="password">
          Password
        </FormLabel>
        <Input
          type="password"
          placeholder="********"
          minLength="8"
          onChange={(e) => setPassword(e.currentTarget.value)}
          w={300}
        />
      </FormControl>
      <Button mt={4} type="submit">
        Submit
      </Button>
    </form>
  );
};

export default CreateUser;
