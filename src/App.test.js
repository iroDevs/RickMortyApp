import { render, screen } from '@testing-library/react';
import App from './App';

test('Testando se tem a palavra Home na tela', () => {
  render(<App />);
  // const linkElement = screen.getByText('Home');
  // expect(linkElement).toBeInTheDocument();

  const elemento = screen.getByText('Home');
  
  expect(elemento).toBeInTheDocument();



});
