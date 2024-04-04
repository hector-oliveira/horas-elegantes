import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { DateCalendar } from '../DateCalendar';

describe('DateCalendar', () => {
  it('renders correctly and calls handleOnChange on input change', () => {
    const handleOnChange = jest.fn();
    const { getByTestId } = render(
      <DateCalendar value="2022-01-01" handleOnChange={handleOnChange} />
    );

    const dateInput = getByTestId('date-input');
    expect(dateInput).toHaveValue('2022-01-01');

    fireEvent.change(dateInput, { target: { value: '2022-01-02' } });
    expect(handleOnChange).toHaveBeenCalled();
  });
});
