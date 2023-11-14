import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { ListItem } from '../components/ListItem/ListItem';

describe('ListItem', () => {
  const mockOnPress = jest.fn();
  const mockId = '123';
  const mockName = 'Item de prueba';

  it('se renderiza correctamente con las props dadas', () => {
    const { getByText } = render(<ListItem id={mockId} name={mockName} onPress={mockOnPress} />);

    expect(getByText(mockName)).toBeTruthy();
    expect(getByText(`ID: ${mockId}`)).toBeTruthy();
  });

  it('llama a onPress cuando se presiona el componente', () => {
    const { getByTestId } = render(<ListItem id={mockId} name={mockName} onPress={mockOnPress} />);

    const touchable = getByTestId('listItemTouchable');
    fireEvent.press(touchable);
    expect(mockOnPress).toHaveBeenCalled();
  });
});
