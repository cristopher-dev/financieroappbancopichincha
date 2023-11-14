import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { SearchList } from '../components/SearchList/SearchList';

describe('SearchList', () => {
  const mockText = 'Buscar';
  const mockOnChangeSearch = jest.fn();

  it('se renderiza correctamente con el placeholder dado', () => {
    const { getByPlaceholderText } = render(<SearchList text={mockText} onChangeSearch={mockOnChangeSearch} />);

    expect(getByPlaceholderText(mockText)).toBeTruthy();
  });

  it('llama a onChangeSearch cuando se cambia el texto', () => {
    const newText = 'Texto de prueba';
    const { getByPlaceholderText } = render(<SearchList text={mockText} onChangeSearch={mockOnChangeSearch} />);

    const input = getByPlaceholderText(mockText);
    fireEvent.changeText(input, newText);

    expect(mockOnChangeSearch).toHaveBeenCalledWith(newText);
  });
});
