import SignUpPage from './SignUpPage';
import { render, screen } from '@testing-library/react';

it('has header', () => {
  render(<SignUpPage />);
  screen.queryAllByRole;
});