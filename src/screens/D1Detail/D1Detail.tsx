import React, { useState, FC } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { styles } from './D1Detail.styles';
import { HeaderLogo } from '../../components/HeaderLogo/HeaderLogo';
import { ConfirmationModal } from '../../components/Modal/Modal';
import { DetailSection } from '../../components/DetailSection/DetailSection';
import { deleteProduct } from '../../api/api';

/**
 * Props for the D1Detail component
 */
interface D1DetailProps {
  navigation: NativeStackNavigationProp<any>;
  route: {
    params: {
      product: {
        id: string;
        name: string;
        description: string;
        logo: string;
        date_release: string;
        date_revision: string;
      };
    };
  };
}

/**
 * Main component to display product details.
 */
export const D1Detail: FC<D1DetailProps> = ({ route, navigation }) => {
  const { product } = route.params;
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

  /**
   * Handles the delete button press.
   */
  const handleDelete = () => {
    setIsModalVisible(true);
  };

  /**
   * Handles the confirm delete button press.
   */
  const handleConfirmDelete = async () => {
    try {
      await deleteProduct(product.id);
      navigation.goBack();
    } catch (error) {
      console.error('Error deleting product:', error);
    }
    setIsModalVisible(false);
  };

  /**
   * Handles the edit button press.
   */
  const handleEdit = () => {
    product.date_release = formatDate(product.date_release);
    product.date_revision = formatDate(product.date_revision);
    navigation.navigate('D2Edit', { product: product });
  };

  return (
    <ScrollView style={styles.container}>
      <HeaderLogo />
      <DetailContent product={product} />
      <EditButton onPress={handleEdit} />
      <DeleteButton onPress={handleDelete} />
      <ConfirmationModal
        visible={isModalVisible}
        onConfirm={handleConfirmDelete}
        onCancel={() => setIsModalVisible(false)}
        message='Are you sure you want to delete this item?'
        isConfirmEnabled={true}
      />
    </ScrollView>
  );
};

/**
 * Formats a date string.
 * @param {string} dateString - Date string to format.
 * @returns {string} - Formatted date string.
 */
const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toISOString().split('T')[0];
};

/**
 * Props for the DetailContent component
 */
interface DetailContentProps {
  product: {
    id: string;
    name: string;
    description: string;
    logo: string;
    date_release: string;
    date_revision: string;
  };
}

/**
 * Component to display product details.
 */
const DetailContent: FC<DetailContentProps> = ({ product }) => {
  return (
    <View style={styles.cardContainer}>
      <Text style={styles.idText}>ID: {product.id}</Text>
      <Text style={styles.extraInfo}>Extra Information</Text>
      <DetailSection label='Name' info={product.name} />
      <DetailSection label='Description' info={product.description} />
      <LogoSection uri={product.logo} />
      <DetailSection label='Release Date' info={formatDate(product.date_release)} />
      <DetailSection label='Review Date' info={formatDate(product.date_revision)} />
    </View>
  );
};

/**
 * Props for the LogoSection component
 */
interface LogoSectionProps {
  uri: string;
}

/**
 * Component to display the product's logo.
 */
const LogoSection: FC<LogoSectionProps> = ({ uri }) => (
  <View>
    <Text>Logo</Text>
    <Image source={{ uri: uri }} style={styles.logoImage} resizeMode='contain' />
  </View>
);

/**
 * Component for the edit button.
 */
const EditButton: FC<{ onPress: () => void }> = ({ onPress }) => (
  <View style={styles.buttonContainer}>
    <TouchableOpacity style={styles.buttonEdit} onPress={onPress}>
      <Text>Edit</Text>
    </TouchableOpacity>
  </View>
);

/**
 * Component for the delete button.
 */
const DeleteButton: FC<{ onPress: () => void }> = ({ onPress }) => (
  <View style={styles.buttonContainer}>
    <TouchableOpacity style={styles.buttonDelete} onPress={onPress}>
      <Text>Delete</Text>
    </TouchableOpacity>
  </View>
);
