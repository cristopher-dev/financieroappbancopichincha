import React from 'react';
import { View, Text, TextInput } from 'react-native';
import { searchListStyles } from './SearchListStyles';
interface SearchListProps {
  text: string;
  onChangeSearch: (search: string) => void;
}
/**
 * SearchList component to display a search input field.
 *
 * @param {object} props - The component's props.
 * @param {string} props.text - The placeholder text for the search input.
 * @param {Function} props.onChangeSearch - The function to call when the search input value changes.
 * @returns {JSX.Element} - Rendered component.
 */
export const SearchList: React.FC<SearchListProps> = ({ text, onChangeSearch }) => (
  <View style={searchListStyles.searchContainer}>
    <Text>Search</Text>
    <TextInput style={searchListStyles.searchInput} onChangeText={onChangeSearch} placeholder={text} />
  </View>
);
