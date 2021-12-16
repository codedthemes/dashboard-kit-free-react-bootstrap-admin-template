// third party
import { render, screen } from '@testing-library/react';

// project imports
import App from './App';

// testcases
test('renders learn react link', () => {
    render(<App />);
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
});
