import { theme } from '@chakra-ui/core';

export default {
  ...theme,
  breakpoints: ['30em', '48em', '62em', '80em'],
  fonts: {
    heading: '"Avenir Next", sans-serif',
    body:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, Helvetica Neue, sans-serif',
    mono: 'Menlo, monospace',
  },
  fontSizes: {
    xs: '0.75rem',
    sm: '0.875rem',
    md: '1rem',
    lg: '1.125rem',
    x1: '1.25rem',
    '2x1': '1.5rem',
    '3x1': '1.875rem',
    '4x1': '2.25rem',
    '5x1': '3rem',
    '6x1': '4rem',
  },
};
