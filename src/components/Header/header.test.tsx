// Importações necessárias
import React from 'react';
import { render, screen } from '@testing-library/react';
import { Header } from './Header';

// Teste do componente Header
describe('Header', () => {
  it('renders correctly', () => {
    const { container } = render(<Header namePage="Test Page" />);

    // Verifica se o nome da página é renderizado
    expect(screen.getByText('Test Page')).toBeInTheDocument();

    // Verifica se o elemento do formulário está presente
    expect(container.querySelector('form')).toBeInTheDocument();
    expect(screen.getByText('até')).toBeInTheDocument();

    // Verifica se o botão está presente
    const button = container.querySelector('button');
    expect(button).toBeInTheDocument();

    // Se o botão estiver presente, verifica se o ícone está presente
    if (button) {
      expect(button.querySelector('svg')).toBeInTheDocument();
    } // Verifica se o ícone está presente no botão
  });
});
