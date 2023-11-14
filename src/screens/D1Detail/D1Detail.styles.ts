import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    width: width,
  },
  cardContainer: {
    padding: 20,
  },
  idText: {
    fontWeight: 'bold',
    fontSize: 22,
  },
  extraInfo: {
    color: 'grey',
  },
  section: {
    flexDirection: 'row',
    marginVertical: 5,
  },
  label: {
    flex: 1,
    justifyContent: 'space-between',
    fontWeight: 'bold',
    color: '#000',
    marginVertical: 2,
  },
  info: {
    color: 'grey',
    marginVertical: 2,
  },
  logoImage: {
    height: 100, // Ajusta según tus necesidades
    width: '100%', // Asume que la imagen debe expandirse a lo ancho del contenedor
    marginVertical: 10,
  },
  buttonEdit: {
    backgroundColor: 'grey',
    padding: 10,
    marginTop: 25,
    alignItems: 'center',
    borderRadius: 5,
    width: '50%',
  },
  buttonDelete: {
    backgroundColor: 'red',
    padding: 10,
    marginTop: 15,
    alignItems: 'center',
    width: '50%',
    borderRadius: 5,
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
