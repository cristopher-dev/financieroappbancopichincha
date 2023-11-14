import React from 'react';
import { render } from '@testing-library/react-native';
import { HeaderLogo } from '../components/HeaderLogo/HeaderLogo';

describe('HeaderLogo', () => {
  it('se renderiza correctamente', () => {
    render(<HeaderLogo />);
    // Añade expectativas o comprobaciones aquí
  });
});
