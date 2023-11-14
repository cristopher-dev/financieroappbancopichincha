import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { Forms } from '../components/Forms/Forms';

describe('Forms', () => {
  const initialData = {
    id: '',
    name: '',
    description: '',
    logo: '',
    date_release: '',
    date_revision: '',
  };

  it('renderiza todos los campos del formulario y los botones', () => {
    const { getByPlaceholderText, getByText } = render(
      <Forms initialData={initialData} onSubmit={() => {}} onReset={() => {}} onErrors={() => {}} onFormDataChange={() => {}} />
    );

    expect(getByPlaceholderText('Identificador')).toBeTruthy();
    expect(getByPlaceholderText('Nombre')).toBeTruthy();
    // Verificar los demás campos...
    expect(getByText('Enviar')).toBeTruthy();
    expect(getByText('Reiniciar')).toBeTruthy();
  });

  it('llama a onSubmit cuando se presiona el botón Enviar sin errores de validación', async () => {
    const mockOnSubmit = jest.fn().mockResolvedValue({});
    const { getByText } = render(
      <Forms initialData={initialData} onSubmit={mockOnSubmit} onReset={() => {}} onErrors={() => {}} onFormDataChange={() => {}} />
    );

    await fireEvent.press(getByText('Enviar'));

    expect(mockOnSubmit).toHaveBeenCalled();
  });

  // Más pruebas...
});
