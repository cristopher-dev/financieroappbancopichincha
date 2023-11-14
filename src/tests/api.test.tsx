import { getProducts, updateProduct, deleteProduct, verifyID } from '../api/api';

const mockProducts = [
  {
    id: 'prdt-001',
    name: 'Producto 1',
    description: 'Descripción del Producto 1',
    logo: 'http://ejemplo.com/logo1.png',
    date_release: '2023-01-01',
    date_revision: '2024-01-01',
  },
  {
    id: 'prdt-002',
    name: 'Producto 2',
    description: 'Descripción del Producto 2',
    logo: 'http://ejemplo.com/logo2.png',
    date_release: '2023-02-01',
    date_revision: '2024-02-01',
  },
];

const mockProduct = {
  id: 'prdt-ficticio-001',
  name: 'Producto Ficticio',
  description: 'Descripción del producto ficticio',
  logo: 'http://ejemplo.com/logo.png',
  date_release: '2023-01-01',
  date_revision: '2024-01-01',
};

describe('getProducts', () => {
  beforeEach(() => {
    fetch.resetMocks();
  });

  it('debe devolver una lista de productos cuando la solicitud es exitosa', async () => {
    fetch.mockResponseOnce(JSON.stringify(mockProducts));

    const products = await getProducts();
    expect(products).toEqual(mockProducts);
    expect(fetch).toHaveBeenCalledWith(
      'https://tribu-ti-staffing-desarrollo-afangwbmcrhucqfh.z01.azurefd.net/ipf-msa-productosfinancieros/bp/products',
      {
        headers: {
          'Content-Type': 'application/json',
          authorId: '21881059',
        },
      }
    );
  });

  it('debe lanzar un error cuando la solicitud falla', async () => {
    fetch.mockReject(new Error('Error de red'));

    await expect(getProducts()).rejects.toThrow('Error de red');
  });
});

describe('updateProduct', () => {
  it('debe actualizar un producto y devolver los datos actualizados', async () => {
    fetch.mockResponseOnce(JSON.stringify(mockProduct));
    const product = await updateProduct(mockProduct);
    expect(product).toEqual(mockProduct);
    expect(fetch).toHaveBeenCalledWith(
      expect.any(String),
      expect.objectContaining({
        method: 'PUT',
        body: JSON.stringify(mockProduct),
      })
    );
  });
});

describe('deleteProduct', () => {
  it('debe eliminar un producto y devolver un mensaje de éxito', async () => {
    fetch.mockResponseOnce(JSON.stringify('Producto eliminado correctamente'));
    const response = await deleteProduct(mockProduct.id);
    expect(response).toBe('Producto eliminado correctamente');
    expect(fetch).toHaveBeenCalledWith(
      expect.any(String),
      expect.objectContaining({
        method: 'DELETE',
      })
    );
  });
});

describe('verifyID', () => {
  it('debe verificar la existencia de un ID y devolver un valor booleano', async () => {
    fetch.mockResponseOnce(JSON.stringify(true));
    const isExist = await verifyID(mockProduct.id);
    expect(isExist).toBe(true);
    expect(fetch).toHaveBeenCalledWith(
      expect.any(String),
      expect.objectContaining({
        method: 'GET',
      })
    );
  });
});
