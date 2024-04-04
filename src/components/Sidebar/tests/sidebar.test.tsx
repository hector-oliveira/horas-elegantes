import { render } from '@testing-library/react';
import { Sidebar } from '../Sidebar';
import { sidebarItems } from '../data/sidebarItems.data';

describe('component Sidebar', () => {
  test('Renderiza o componente Sidebard', () => {
    render(<Sidebar />);
  });

  test('verifica se os itens do sidebar foram renderizados', () => {
    expect(sidebarItems).toHaveLength(3);
  });
});
