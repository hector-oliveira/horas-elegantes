import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { UpdateStatusModal } from './UpdateStatusModal';

test('UpdateStatusModal works correctly', () => {
  const initialStatus = { newStatus: 'Test', isUpdated: true };
  const setStatus = jest.fn();

  render(<UpdateStatusModal status={initialStatus} setStatus={setStatus} />);

  expect(
    screen.getByText('Status atualizado com sucesso!')
  ).toBeInTheDocument();

  fireEvent.click(screen.getByText('Fechar'));

  expect(setStatus).toHaveBeenCalledWith({
    ...initialStatus,
    isUpdated: false
  });
});
