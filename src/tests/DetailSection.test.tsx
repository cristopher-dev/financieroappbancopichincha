import React from 'react';
import { render } from '@testing-library/react-native';
import { DetailSection } from '../components/DetailSection/DetailSection';

describe('DetailSection', () => {
  it('renderiza correctamente con las props dadas', () => {
    const { getByText } = render(<DetailSection label='Label Test' info='Info Test' />);

    expect(getByText('Label Test')).toBeTruthy();
    expect(getByText('Info Test')).toBeTruthy();
  });
});
