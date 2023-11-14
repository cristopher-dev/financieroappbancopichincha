import React from 'react';
import { View, Image } from 'react-native';
import { styles } from './HeaderLogo.styles';

/**
 * HeaderLogo component to display a logo in the header.
 * @returns {JSX.Element} - Rendered component.
 */
export const HeaderLogo: React.FC = () => {
  return (
    <View style={styles.headerContainer}>
      <Image
        source={{ uri: 'https://www.mouseinteractivo.com/wp-content/uploads/mouse-pichincha-0.jpg' }}
        style={styles.logo}
        resizeMode='contain'
      />
    </View>
  );
};
