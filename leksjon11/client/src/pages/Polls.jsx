import React, { useEffect, useState } from 'react';
import {
  Box,
  Heading,
  Flex,
  Text,
  Icon,
  Checkbox,
  Button,
} from '@chakra-ui/core';
import { list, update } from '../utils/pollService';

const Polls = () => {
  const [polls, setPolls] = useState(null);
  const [error, setError] = useState(null);
  const [answer, setAnswer] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await list();
      if (error) {
        setError(error);
      } else {
        setPolls(data);
      }
    };
    fetchData();
  }, []);

  const removeHandler = (e) => {
    const removed = answer.filter((item) => item !== e);
    setAnswer([...removed]);
  };

  const checkHandler = (e) => {
    answer.map((item) => {
      if (item === e) {
        removeHandler(e);
      }
    }, setAnswer([e, ...answer]));
  };

  const submitHandler = async (e) => {
    answer.map((item) => {
      update(e.target.id, item);
    });
    answer.map((item) => removeHandler(item));
  };

  return (
    <section>
      <Heading pl={6} mb={2} as="h1" size="md">
        Polls
      </Heading>
      {error && <p>{error}</p>}
      <Flex direction="column">
        {polls &&
          polls.map((poll) => (
            <Box p="6" as="article" key={poll.id}>
              <Heading mb={2} as="h2" size="sm">
                {poll.question}
              </Heading>
              <div fontSize="lg" mb={2}>
                {poll.answers.map((pollAnswer) => {
                  if (pollAnswer.answer !== null) {
                    return (
                      <Flex key={pollAnswer._id}>
                        <Text>{pollAnswer.answer}</Text>
                        <Checkbox
                          ml={3}
                          variantColor="blue"
                          name="check"
                          onChange={() => checkHandler(pollAnswer)}
                        />
                      </Flex>
                    );
                  }
                })}
              </div>
              <Text fontSize="lg" mb={2}>
                <Icon name="time" fontSize="lg" mr={2} />
                {new Date(poll.createdAt).toDateString()}
              </Text>
              <Text fontSize="lg">
                Created by: {poll.user ? poll.user : 'Unknown'}
              </Text>
              <Button id={poll.id} mt={5} onClick={submitHandler}>
                Submit
              </Button>
            </Box>
          ))}
      </Flex>
    </section>
  );
};

export default Polls;
