import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders bhaskar sharma resume content', () => {
  render(<App />);
  expect(screen.getByRole('heading', { name: /bhaskar sharma/i })).toBeInTheDocument();
  expect(screen.getByText(/anylical engine/i)).toBeInTheDocument();
});
