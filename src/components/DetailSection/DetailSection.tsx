import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './DetailSection.styles';

/**
 * Props for the DetailSection component.
 */
interface DetailSectionProps {
  /**
   * The label to display in the detail section.
   */
  label: string;

  /**
   * The information or content to display in the detail section.
   */
  info: string;
}

/**
 * DetailSection component to display a labeled information section.
 * @param {DetailSectionProps} props - Props for the DetailSection component.
 * @returns {JSX.Element} - Rendered component.
 */
export const DetailSection: React.FC<DetailSectionProps> = ({ label, info }) => {
  return (
    <View style={styles.section}>
      <Text style={styles.label}>{label}</Text>
      <Text style={styles.info}>{info}</Text>
    </View>
  );
};
