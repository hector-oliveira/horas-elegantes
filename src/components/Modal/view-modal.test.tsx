import { render, fireEvent } from '@testing-library/react';
import { ViewModal } from './ViewModal';

describe('ViewModal', () => {
  it('renders correctly', () => {
    const closeModal = jest.fn();
    const { getByRole } = render(
      <ViewModal closeModal={closeModal}>Test</ViewModal>
    );

    expect(getByRole('button')).toBeInTheDocument();
  });

  it('calls closeModal when close button is clicked', () => {
    const closeModal = jest.fn();
    const { getByRole } = render(
      <ViewModal closeModal={closeModal}>Test</ViewModal>
    );

    fireEvent.click(getByRole('button'));
    expect(closeModal).toHaveBeenCalled();
  });
});
