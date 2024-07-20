// ExampleComponent.test.js
import { render, screen } from '@testing-library/react';
import ExampleComponent from './ExampleComponent';

test('renders ExampleComponent', () => {
  render(<ExampleComponent />);
  expect(screen.getByText(/example/i)).toBeInTheDocument();
});
