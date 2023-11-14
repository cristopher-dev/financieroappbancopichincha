import React, { FC, useState } from 'react';
import { Forms } from '../../components/Forms/Forms';
import { Product } from '../../types/product.interfaces';
import { D2Props, initialProductState } from './D2Add.interfaces';
import { Alert, ScrollView } from 'react-native';
import { createProduct } from '../../api/api';
import { HeaderLogo } from '../../components/HeaderLogo/HeaderLogo';

/**
 * Handle the form submission.
 * @param {Product} formData - Data from the form.
 * @param {any} navigation - Navigation object.
 */
const handleFormSubmit = async (formData, navigation) => {
  try {
    await createProduct(formData);
    Alert.alert('Product created successfully');
  } catch (error) {
    let errorMessage = 'Error creating the product.';
    if (error.response && error.response.data) {
      errorMessage = error.response.data.message || errorMessage;
    } else if (error.message) {
      errorMessage = error.message;
    }
    Alert.alert('Error creating the product: ' + errorMessage);
  }
};

/**
 * Handle the form reset.
 * @param {React.Dispatch<React.SetStateAction<Product>>} setFormData - Function to set the form data state.
 */
const handleFormReset = (setFormData) => {
  setFormData(initialProductState);
};

/**
 * Handle errors during form submission.
 */
const handleErrors = () => {
  Alert.alert('Please review the form fields');
};

/**
 * Handle changes in form data.
 * @param {Product} updatedFormData - Updated form data.
 * @param {React.Dispatch<React.SetStateAction<Product>>} setFormData - Function to set the form data state.
 */
const handleFormDataChange = (updatedFormData, setFormData) => {
  setFormData(updatedFormData);
};

/**
 * D2Add component for adding a new product.
 * @param {D2Props} navigation - Navigation object.
 */
export const D2Add: FC<D2Props> = ({ navigation }) => {
  const [formData, setFormData] = useState<Product>(initialProductState);

  return (
    <ScrollView>
      <HeaderLogo />
      <Forms
        initialData={formData}
        onSubmit={() => handleFormSubmit(formData, navigation)}
        onReset={() => handleFormReset(setFormData)}
        onErrors={handleErrors}
        onFormDataChange={(updatedFormData) => handleFormDataChange(updatedFormData, setFormData)}
      />
    </ScrollView>
  );
};
