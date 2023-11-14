import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { ValidatedInput } from '../components/ValidatedInput/ValidatedInput';

describe('ValidatedInput', () => {
  const mockOnChangeText = jest.fn();
  const mockPlaceholder = 'Escribe aquí';
  const mockValue = 'Texto inicial';
  const mockErrorMessage = 'Error en el campo';

  it('se renderiza correctamente con las props dadas', () => {
    const { getByPlaceholderText, queryByText } = render(
      <ValidatedInput value={mockValue} onChangeText={mockOnChangeText} placeholder={mockPlaceholder} />
    );

    expect(getByPlaceholderText(mockPlaceholder)).toBeTruthy();
    expect(queryByText(mockErrorMessage)).toBeNull();
  });

  it('llama a onChangeText cuando se cambia el texto', () => {
    const newText = 'Nuevo texto';
    const { getByPlaceholderText } = render(
      <ValidatedInput value={mockValue} onChangeText={mockOnChangeText} placeholder={mockPlaceholder} />
    );

    const input = getByPlaceholderText(mockPlaceholder);
    fireEvent.changeText(input, newText);

    expect(mockOnChangeText).toHaveBeenCalledWith(newText);
  });

  it('muestra un mensaje de error cuando se proporciona', () => {
    const { getByText } = render(
      <ValidatedInput value={mockValue} onChangeText={mockOnChangeText} placeholder={mockPlaceholder} errorMessage={mockErrorMessage} />
    );

    expect(getByText(mockErrorMessage)).toBeTruthy();
  });
});
