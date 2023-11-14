import React, { useState, FC, useEffect } from 'react';
import { ScrollView, TouchableOpacity, Text, View } from 'react-native';
import { ValidatedInput } from '../../components/ValidatedInput/ValidatedInput';

import { Errors, FormsProps, Product } from './forms.interfaces';
import { styles } from './D2.styles';
import {
  validateProductId,
  validateProductName,
  validateProductDescription,
  validateProductReleaseDate,
  validateProductReviewDate,
  validateProductLogo,
} from './validateProduct';

const placeholders = {
  id: 'Identificador',
  name: 'Nombre',
  description: 'Descripción',
  logo: 'URL del Logo',
  date_release: 'Fecha de Lanzamiento (YYYY-MM-DD)',
  date_revision: 'Fecha de Revisión (YYYY-MM-DD)',
};

export const Forms: FC<FormsProps> = ({ initialData, onSubmit, onReset, onErrors, onFormDataChange }) => {
  const [formData, setFormData] = useState<Product>(initialData);
  const [errors, setErrors] = useState<Errors>({} as Errors);

  useEffect(() => {
    setFormData(initialData);
  }, [initialData]);

  const validateField = (name: keyof Product, value: string) => {
    switch (name) {
      case 'id':
        return validateProductId(value);
      case 'name':
        return validateProductName(value);
      case 'description':
        return validateProductDescription(value);
      case 'logo':
        return validateProductLogo(value);
      case 'date_release':
        return validateProductReleaseDate(value);
      case 'date_revision':
        return validateProductReviewDate(value, formData.date_release);
      default:
        return '';
    }
  };

  const handleChange = (name: keyof Product, value: string) => {
    const updatedFormData = { ...formData, [name]: value };
    setFormData(updatedFormData);
    onFormDataChange(updatedFormData);

    // Validar el campo cambiado y actualizar el estado de errores
    const updatedErrors = {
      ...errors,
      [name]: validateField(name, value), // Llama a la función de validación correspondiente
    };
    setErrors(updatedErrors);
  };

  const handleSubmit = () => {
    // Crear un objeto para almacenar los errores de validación
    let validationErrors: Errors = {
      id: validateProductId(formData.id),
      name: validateProductName(formData.name),
      description: validateProductDescription(formData.description),
      logo: validateProductLogo(formData.logo),
      releaseDate: validateProductReleaseDate(formData.date_release),
      reviewDate: validateProductReviewDate(formData.date_revision, formData.date_release),
    };

    // Comprobar si hay errores de validación
    const hasErrors = Object.values(validationErrors).some((error) => error);

    if (!hasErrors) {
      onSubmit(formData);
    } else {
      onErrors(validationErrors);
      setErrors(validationErrors);
    }
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.header}>Formulario</Text>
        {Object.keys(formData).map((key) => {
          const error = errors[key as keyof Errors];
          const placeholder = placeholders[key as keyof Product] || key;
          return (
            <ValidatedInput
              key={key}
              value={formData[key as keyof Product]}
              onChangeText={(value) => handleChange(key as keyof Product, value)}
              placeholder={placeholder}
              errorMessage={error}
            />
          );
        })}

        <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
          <Text>Enviar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.resetButton} onPress={onReset}>
          <Text>Reiniciar</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};
