import React, { useState } from 'react';
import {
  Input,
  FormControl,
  Button,
  FormLabel,
  Heading,
} from '@chakra-ui/core';
import { create } from '../utils/pollService.js';

const CreatePoll = () => {
  const [question, setQuestion] = useState(null);
  const [answer1, setAnswer1] = useState(null);
  const [answer2, setAnswer2] = useState(null);
  const [user, setUser] = useState(null);

  const submitHandler = async (e) => {
    e.preventDefault();

    const data = {
      question,
      answers: [{ answer: answer1 }, { answer: answer2 }],
      user,
    };

    try {
      await create(data);
      window.location = '/';
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <form onSubmit={submitHandler}>
      <Heading pb={3}>Create Poll</Heading>
      <FormControl isRequired>
        <FormLabel>Question</FormLabel>
        <Input
          type="text"
          id="question"
          placeholder="Type your question here"
          minLength="5"
          maxLength="100"
          onChange={(e) => setQuestion(e.currentTarget.value)}
          width={500}
        />
      </FormControl>
      <FormControl isRequired>
        <FormLabel>First answer</FormLabel>
        <Input
          type="text"
          id="answer1"
          placeholder="Type you first question here"
          onChange={(e) => setAnswer1(e.currentTarget.value)}
          width={500}
        />
      </FormControl>
      <FormControl isRequired>
        <FormLabel>Second answer</FormLabel>
        <Input
          type="text"
          id="answer2"
          placeholder="Type your second answer here"
          onChange={(e) => setAnswer2(e.currentTarget.value)}
          width={500}
        />
      </FormControl>
      <FormControl>
        <FormLabel>
          User (If no user is filled it, poll will show "Unknown" user)
        </FormLabel>
        <Input
          type="text"
          id="user"
          placeholder="Type your preferred username here"
          onChange={(e) => setUser(e.currentTarget.value)}
          width={500}
        />
      </FormControl>
      <Button type="submit" mt={4}>
        Submit poll
      </Button>
    </form>
  );
};

export default CreatePoll;
