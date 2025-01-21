import '@testing-library/jest-dom';
import {render, fireEvent, screen} from '@testing-library/react';
import App from './App';

test('should increment count', () => {
    render(<App />)
  
    expect(screen.getByText('count is 0')).toBeInTheDocument();
  
    fireEvent.click(screen.getByRole('button'));
    expect(screen.getByText('count is 1')).toBeInTheDocument()
  })