import React from 'react';
import { GestureResponderEvent, StyleProp, TouchableOpacity, ViewStyle, Text } from 'react-native';

/**
 * Props for the FormButton component.
 */
interface FormButtonProps {
  /**
   * The text to display on the button.
   */
  title: string;

  /**
   * The function to be called when the button is pressed.
   * @param {GestureResponderEvent} event - The press event.
   */
  onPress: (event: GestureResponderEvent) => void;

  /**
   * Additional styles to apply to the button.
   */
  style?: StyleProp<ViewStyle>;
}

/**
 * FormButton component to render a button with custom text and press event.
 * @param {FormButtonProps} props - Props for the FormButton component.
 * @returns {JSX.Element} - Rendered component.
 */
export const FormButton: React.FC<FormButtonProps> = ({ title, onPress, style }) => (
  <TouchableOpacity onPress={onPress} style={style}>
    <Text>{title}</Text>
  </TouchableOpacity>
);
