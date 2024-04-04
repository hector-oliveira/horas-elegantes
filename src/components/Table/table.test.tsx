import { render, fireEvent } from '@testing-library/react';
import { Table, BodyDataProps } from './Table';

describe('Table', () => {
  const mockOpenViewModal = jest.fn();
  const mockOpenEditModal = jest.fn();

  const bodyData: BodyDataProps[] = [
    {
      orderCode: '123',
      value: '100',
      client: 'John Doe',
      dateOfBuy: '2022-01-01',
      address: '123 Main St',
      status: 'Delivered'
    }
  ];

  const headerData = [
    'Order Code',
    'Value',
    'Client',
    'Date of Buy',
    'Address',
    'Status'
  ];

  it('verifica se a tabela renderiza corretamente', () => {
    const { getByText } = render(
      <Table
        hederData={headerData}
        bodyData={bodyData}
        openViewModal={mockOpenViewModal}
        openEditModal={mockOpenEditModal}
      />
    );

    // resultado esperado
    expect(getByText('123')).toBeInTheDocument();
    expect(getByText('100')).toBeInTheDocument();
    expect(getByText('John Doe')).toBeInTheDocument();
    expect(getByText('2022-01-01')).toBeInTheDocument();
    expect(getByText('123 Main St')).toBeInTheDocument();
    expect(getByText('Delivered')).toBeInTheDocument();
  });

  it('chama openViewModal quando o botão de visualização é clicado', () => {
    const { getByLabelText } = render(
      <Table
        hederData={headerData}
        bodyData={bodyData}
        openViewModal={mockOpenViewModal}
        openEditModal={mockOpenEditModal}
      />
    );

    fireEvent.click(getByLabelText('Visualizar'));
    expect(mockOpenViewModal).toHaveBeenCalledWith(bodyData[0]);
  });

  it('chama openEditModal quando o botão de edição é clicado', () => {
    const { getByLabelText } = render(
      <Table
        hederData={headerData}
        bodyData={bodyData}
        openViewModal={mockOpenViewModal}
        openEditModal={mockOpenEditModal}
      />
    );

    fireEvent.click(getByLabelText('Editar'));
    expect(mockOpenEditModal).toHaveBeenCalledWith(bodyData[0]);
  });
});
