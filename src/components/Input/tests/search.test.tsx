import { render, fireEvent } from '@testing-library/react';
import { Search } from '../Search';

describe('Search', () => {
  it('renders correctly', () => {
    const { getByPlaceholderText } = render(
      <Search filterValue="" onChange={() => {}} />
    );
    expect(getByPlaceholderText('Buscar')).toBeInTheDocument();
  });

  it('calls onChange when input value changes', () => {
    const mockOnChange = jest.fn();
    const { getByPlaceholderText } = render(
      <Search filterValue="" onChange={mockOnChange} />
    );
    const input = getByPlaceholderText('Buscar');
    fireEvent.change(input, { target: { value: 'test' } });
    expect(mockOnChange).toHaveBeenCalled();
  });
});
