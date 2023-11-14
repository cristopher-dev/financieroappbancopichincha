// ListItemStyles.ts
import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export const listItemStyles = StyleSheet.create({
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#dddddd',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#dddddd',
    width: width - 32,
  },
  itemContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  itemText: {
    flexDirection: 'column',
  },
  title: {
    fontSize: 16,
  },
});
