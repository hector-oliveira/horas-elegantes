import { render, screen, fireEvent } from '@testing-library/react';
import { ButtonAction } from './ButtonAction';

describe('ButtonAction', () => {
  it('renderizar o texto corretamente', () => {
    render(<ButtonAction>Click me</ButtonAction>);
    const buttonElement = screen.getByText(/click me/i);
    expect(buttonElement).toBeInTheDocument();
  });

  it('lidando com cliques do botão', () => {
    const handleClick = jest.fn();
    render(<ButtonAction onClick={handleClick}>Click me</ButtonAction>);
    const buttonElement = screen.getByText(/click me/i);
    fireEvent.click(buttonElement);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
