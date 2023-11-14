import React, { useCallback, useEffect, useState } from 'react';
import { View, FlatList, Text, RefreshControl } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';

import { ListItem } from '../../components/ListItem/ListItem';
import { SearchList } from '../../components/SearchList/SearchList';
import { HeaderLogo } from '../../components/HeaderLogo/HeaderLogo';
import { FormButton } from '../../components/FormButton/FormButton';
import { getProducts } from '../../api/api';

import { styles } from './D1.styles';

// Define the Product interface
interface Product {
  id: string;
  name: string;
}

// Define the Props interface for D1 component
interface Props {
  navigation: StackNavigationProp<any, any>; // Adjust types as needed
}

// Define the RecordCounterProps interface
interface RecordCounterProps {
  count: number;
}

/**
 * Filter products based on search text.
 * @param {Product[]} products - List of products to filter.
 * @param {string} searchText - Text to filter by.
 * @returns {Product[]} - Filtered list of products.
 */
const filterProducts = (products: Product[], searchText: string): Product[] => {
  return products.filter(
    (product) =>
      product.name.toLowerCase().includes(searchText.toLowerCase()) || product.id.toLowerCase().includes(searchText.toLowerCase())
  );
};

/**
 * Component to display the total record count.
 * @param {RecordCounterProps} props - Props for RecordCounter component.
 * @returns {JSX.Element} - Rendered component.
 */
const RecordCounter: React.FC<RecordCounterProps> = ({ count }) => (
  <View style={styles.counterContainer}>
    <Text style={styles.counterText}>{`Total records: ${count}`}</Text>
  </View>
);

/**
 * Load products and update the state.
 * @param {function} setProducts - Function to set the products state.
 */
const loadProducts = async (setProducts: React.Dispatch<React.SetStateAction<Product[]>>) => {
  try {
    const fetchedProducts = await getProducts(); // Adjust the return type based on your API response
    setProducts(fetchedProducts);
  } catch (error) {
    console.error('Error loading products:', error);
  }
};

/**
 * D1 component to display a list of products.
 * @param {Props} props - Props for D1 component.
 * @returns {JSX.Element} - Rendered component.
 */
export const D1: React.FC<Props> = ({ navigation }) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [searchText, setSearchText] = useState<string>('');
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    loadProducts(setProducts);
    const unsubscribe = navigation.addListener('focus', () => loadProducts(setProducts));
    return unsubscribe;
  }, [navigation]);

  /**
   * Handle pull-to-refresh action.
   */
  const onRefresh = useCallback(async () => {
    setRefreshing(true);
    loadProducts(setProducts);
    setRefreshing(false);
  }, []);

  const filteredData = filterProducts(products, searchText);

  /**
   * Navigate to the add product screen.
   */
  const handleAddPress = () => navigation.navigate('D2Add');

  /**
   * Render a product item.
   * @param {{item: Product}} param0 - Product item to render.
   * @returns {JSX.Element} - Rendered product item.
   */
  const renderProduct = ({ item }: { item: Product }) => (
    <ListItem id={item.id} name={item.name} onPress={() => navigation.navigate('D1Detail', { product: item })} />
  );

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={filteredData}
        renderItem={renderProduct}
        keyExtractor={(item, index) => item.id + index.toString()}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
        ListHeaderComponent={
          <>
            <HeaderLogo />
            <SearchList text='Search' onChangeSearch={setSearchText} />
            <RecordCounter count={filteredData.length} />
          </>
        }
        // Adjust this according to your button's height
        contentContainerStyle={{ paddingBottom: 50 }}
      />
      <FormButton title='Agregar' onPress={handleAddPress} style={styles.formButton} />
    </View>
  );
};
