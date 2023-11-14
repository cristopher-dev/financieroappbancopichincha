import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { FormButton } from '../components/FormButton/FormButton';

describe('FormButton', () => {
  it('se renderiza correctamente y responde a los eventos onPress', () => {
    const onPressMock = jest.fn();
    const { getByText } = render(<FormButton title='Presioname' onPress={onPressMock} />);

    const button = getByText('Presioname');
    expect(button).toBeTruthy();

    fireEvent.press(button);
    expect(onPressMock).toHaveBeenCalled();
  });
});
