import { TextInput, View, Text } from 'react-native';
import { styles } from './ValidatedInput.styles';

// Definiendo una interfaz para las props
interface ValidatedInputProps {
  value: string;
  onChangeText: (text: string) => void;
  placeholder: string;
  errorMessage?: string;
}
/**
 * ValidatedInput component to display an input field with optional error message.
 *
 * @param {object} props - The component's props.
 * @param {string} props.value - The value of the input field.
 * @param {Function} props.onChangeText - The function to call when the input value changes.
 * @param {string} props.placeholder - The placeholder text for the input field.
 * @param {string} [props.errorMessage] - The optional error message to display.
 * @returns {JSX.Element} - Rendered component.
 */
export const ValidatedInput: React.FC<ValidatedInputProps> = ({ value, onChangeText, placeholder, errorMessage }) => {
  return (
    <View style={styles.inputWrapper}>
      <TextInput
        style={[styles.input, errorMessage ? styles.inputError : null]}
        onChangeText={onChangeText}
        value={value}
        placeholder={placeholder}
        placeholderTextColor='#000'
      />
      {errorMessage ? <Text style={styles.errorText}>{errorMessage}</Text> : null}
    </View>
  );
};
