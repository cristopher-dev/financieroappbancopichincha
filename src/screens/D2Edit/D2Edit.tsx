import React, { FC, useEffect, useState } from 'react';
import { Alert, ScrollView } from 'react-native';
import { Forms } from '../../components/Forms/Forms';
import { updateProduct } from '../../api/api';
import { Product, initialProductState } from '../../types/product.interfaces';
import { D2Props } from './D2Edit.interfaces';
import { HeaderLogo } from '../../components/HeaderLogo/HeaderLogo';

/**
 * Function to handle the update of a product.
 * @param {Product} formData - Data of the product to be updated.
 */
const handleUpdateProduct = async (formData) => {
  try {
    await updateProduct(formData);
    Alert.alert('Product updated successfully');
  } catch (error) {
    console.log(error); // For debugging purposes
    Alert.alert('Error updating the product');
  }
};

/**
 * Function to handle the reset of the form.
 * @param {React.Dispatch<React.SetStateAction<Product>>} setFormData - Function to set the form data state.
 */
const handleResetForm = (setFormData) => {
  setFormData(initialProductState);
};

/**
 * Function to handle changes in form data.
 * @param {Product} updatedFormData - Updated form data.
 * @param {React.Dispatch<React.SetStateAction<Product>>} setFormData - Function to set the form data state.
 */
const handleDataChange = (updatedFormData, setFormData) => {
  setFormData(updatedFormData);
};

/**
 * Function to handle form errors.
 */
const handleFormErrors = () => {
  Alert.alert('Form errors');
};

/**
 * D2Edit component for editing a product.
 * @param {D2Props} route - Navigation route.
 */
export const D2Edit: FC<D2Props> = ({ route }) => {
  const [formData, setFormData] = useState<Product>(initialProductState);
  const { product } = route.params;

  useEffect(() => {
    if (product) {
      setFormData(product);
    }
  }, [product]);

  return (
    <ScrollView>
      <HeaderLogo />
      <Forms
        initialData={formData}
        onSubmit={handleUpdateProduct}
        onReset={() => handleResetForm(setFormData)}
        onFormDataChange={(updatedFormData) => handleDataChange(updatedFormData, setFormData)}
        onErrors={handleFormErrors}
      />
    </ScrollView>
  );
};
