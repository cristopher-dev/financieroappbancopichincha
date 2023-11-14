import { Dimensions, StyleSheet } from 'react-native';
const screenWidth = Dimensions.get('window').width;

export const searchListStyles = StyleSheet.create({
  searchContainer: {
    padding: 10,
    minWidth: screenWidth,
  },
  searchInput: {
    borderWidth: 1,
    borderColor: '#dddddd',
    padding: 10,
    borderRadius: 5,
    marginVertical: 5,
  },
});
