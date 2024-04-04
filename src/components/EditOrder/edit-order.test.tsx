import { render, fireEvent } from '@testing-library/react';
import { EditOrder } from './EditOrder'; // Ajuste o caminho de importação conforme necessário

test('EditOrder component', () => {
  const mockHandleUpdate = jest.fn();
  const mockHandleStatusChange = jest.fn();

  const order = {
    orderCode: '123',
    client: 'Test Client',
    address: 'Test Address',
    status: 'Test Status'
  };

  const { getByText, getByPlaceholderText } = render(
    <EditOrder
      order={order}
      handleUpdate={mockHandleUpdate}
      handleStatusChange={mockHandleStatusChange}
    />
  );

  // Verifica se o pedido é renderizado corretamente
  expect(getByText('Pedido: 123')).toBeInTheDocument();
  expect(getByText('Cliente: Test Client')).toBeInTheDocument();
  expect(getByText('Endereço: Test Address')).toBeInTheDocument();
  expect(getByText('Status: Test Status')).toBeInTheDocument();

  // Verifica se a função handleStatusChange é chamada quando o valor do input muda
  fireEvent.change(getByPlaceholderText('Novo Status'), {
    target: { value: 'New Status' }
  });
  expect(mockHandleStatusChange).toHaveBeenCalled();

  // Verifica se a função handleUpdate é chamada quando o botão é clicado
  fireEvent.click(getByText('Atualizar'));
  expect(mockHandleUpdate).toHaveBeenCalled();
});
