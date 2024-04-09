import { render, screen } from '@testing-library/react';
import { BaseLayout } from './BaseLayout';

describe('BaseLayout', () => {
  it('renderiza o componente BaseLayout e seus filhos', () => {
    render(<BaseLayout>teste</BaseLayout>);
    const baseLayoutElement = screen.getByText(/teste/i);
    expect(baseLayoutElement).toBeInTheDocument();
  });
});
