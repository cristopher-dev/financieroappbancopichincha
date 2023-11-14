import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { listItemStyles } from './ListItemStyles';

/**
 * ListItem component to display an item with ID and name.
 *
 * @param {object} props - The component's props.
 * @param {string} props.id - The ID of the item.
 * @param {string} props.name - The name of the item.
 * @param {Function} props.onPress - The function to execute when the item is pressed.
 * @returns {JSX.Element} - Rendered component.
 */
export const ListItem: React.FC<ListItemProps> = ({ id, name, onPress }) => (
  <TouchableOpacity onPress={onPress} style={listItemStyles.item}>
    <View style={listItemStyles.itemContent}>
      <View style={listItemStyles.itemText}>
        <Text style={listItemStyles.title}>{name}</Text>
        <Text>ID: {id}</Text>
      </View>
      <Icon name='chevron-forward-outline' size={30} color='#000' />
    </View>
  </TouchableOpacity>
);
