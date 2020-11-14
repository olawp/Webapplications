import React, { useEffect, useState } from 'react';
import { Box, Heading, Flex, Text, Icon, Checkbox } from '@chakra-ui/core';
import { list } from '../utils/pollService';

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

  const checkHandler = (answer) => {};

  const submitHandler = (e) => {};

  return (
    <section>
      <Heading mb={2} as="h1" size="md">
        Polls
      </Heading>
      {error && <p>{error}</p>}
      <Flex>
        {polls &&
          polls.map((poll) => (
            <Box p="6" as="article" key={poll.id}>
              <Heading mb={2} as="h2" size="sm">
                {poll.question}
              </Heading>
              <div fontSize="lg" mb={2}>
                {poll.answers.map((answer) => {
                  if (answer.answer !== null) {
                    return (
                      <Flex key={answer.id}>
                        <Text>{answer.answer}</Text>
                        <Checkbox />
                      </Flex>
                    );
                  }
                })}
              </div>
              <Text fontSize="lg" mb={2}>
                <Icon fontSize="lg" mr={2} />
                {new Date(poll.createdAt).toDateString()}
              </Text>
              <Text fontSize="lg">Created by: {poll.user}</Text>
            </Box>
          ))}
      </Flex>
    </section>
  );
};

export default Polls;
