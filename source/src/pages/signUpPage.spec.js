import SignUpPage from './SignUpPage';
import { render, screen } from '@testing-library/react';

describe('Sign Up Page', () => {
  describe('Layout', () => {
    it('has header', () => {
      render(<SignUpPage />);
      const header = screen.queryAllByRole('heading', { name: 'Sign Up' });
      expect(header).toBeInTheDocument();
    });
  });
});
