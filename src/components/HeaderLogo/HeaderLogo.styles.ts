import { StyleSheet } from 'react-native';
export const styles = StyleSheet.create({
  headerContainer: {
    paddingVertical: 20, // Espacio superior e inferior dentro del contenedor
    paddingHorizontal: 20, // Espacio a los lados dentro del contenedor
    alignItems: 'center', // Centrar el logo verticalmente dentro del contenedor
    justifyContent: 'center', // Centrar el logo horizontalmente dentro del contenedor
    borderBottomWidth: 2, // Ancho del borde inferior para dar efecto de sombra o separación
    borderBottomColor: '#dddddd', // Color del borde inferior
    shadowColor: '#000', // Color de la sombra para iOS
    shadowOffset: { width: 0, height: 2 }, // Desplazamiento de la sombra para iOS
    shadowOpacity: 0.25, // Opacidad de la sombra para iOS
    shadowRadius: 3.84, // Radio de la sombra para iOS
  },
  logo: {
    width: 100, // Ajusta según el tamaño de tu logo
    height: 50, // Ajusta según el tamaño de tu logo
  },
});
