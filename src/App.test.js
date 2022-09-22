import { render, screen } from '@testing-library/react';
import App from './App';
import '@testing-library/jest-dom'

test('renders home screen', () => {
    render(<App />);
    const gameName = screen.getByText(/Magic Match/);
    expect(gameName).toBeInTheDocument();
})
test('make sure grid is visible', () => {
    render(<App />);
    const newGame = screen.getByText(/New Game/);
    expect(newGame).toBeInTheDocument();
})