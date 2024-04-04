import React from 'react';
import { render, screen } from '@testing-library/react';
import { OrderDetails } from './OrderDetails';

test('renders OrderDetails with order', () => {
  const order = {
    orderCode: '123',
    client: 'John Doe',
    address: '123 Main St',
    status: 'Delivered'
  };

  render(<OrderDetails order={order} />);

  expect(screen.getByText('Pedido')).toBeInTheDocument();
  expect(screen.getByText(order.orderCode)).toBeInTheDocument();
  expect(screen.getByText('Cliente')).toBeInTheDocument();
  expect(screen.getByText(order.client)).toBeInTheDocument();
  expect(screen.getByText('Endereço')).toBeInTheDocument();
  expect(screen.getByText(order.address)).toBeInTheDocument();
  expect(screen.getByText('Status')).toBeInTheDocument();
  expect(screen.getByText(order.status)).toBeInTheDocument();
});
