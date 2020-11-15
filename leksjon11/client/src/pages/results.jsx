import React, { useState, useEffect } from 'react';
import { Box, Heading, Flex, Text, Icon } from '@chakra-ui/core';
import { list } from '../utils/pollService.js';

const Results = () => {
  const [polls, setPolls] = useState(null);
  const [error, setError] = useState(null);

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

  return (
    <section>
      <Heading pl={6} mb={2} as="h1" size="md">
        Poll Results
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
                        <Text>
                          {pollAnswer.answer}: {pollAnswer.votes} votes
                        </Text>
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
            </Box>
          ))}
      </Flex>
    </section>
  );
};

export default Results;
