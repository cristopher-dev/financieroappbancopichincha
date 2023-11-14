import { Product, ProductId } from './types'; // Make sure the path is correct

const BASE_URL = 'https://tribu-ti-staffing-desarrollo-afangwbmcrhucqfh.z01.azurefd.net/ipf-msa-productosfinancieros';
const AUTHOR_ID = '21881059';
const headers = {
  'Content-Type': 'application/json',
  authorId: AUTHOR_ID,
};

const handleResponse = async (response: Response): Promise<any> => {
  const responseText = await response.text();

  if (isJson(responseText)) {
    return JSON.parse(responseText);
  } else {
    console.error('La respuesta no es un JSON válido:', responseText);
    // Maneja el caso en que la respuesta no sea JSON
    throw new Error('Respuesta no válida');
  }
};

// Get Financial Products
export const getProducts = async (): Promise<Product[]> => {
  try {
    const response = await fetch(`${BASE_URL}/bp/products`, { headers });
    return handleResponse(response);
  } catch (error) {
    console.error('Error getting products:', error);
    throw error;
  }
};

// Create Financial Product
export const createProduct = async (product: Product): Promise<Product> => {
  try {
    const response = await fetch(`${BASE_URL}/bp/products`, {
      method: 'POST',
      headers,
      body: JSON.stringify(product),
    });
    return handleResponse(response);
  } catch (error) {
    console.error('Error creating product:', error);
    throw error;
  }
};

// Update Financial Product
export const updateProduct = async (product: Product): Promise<Product> => {
  try {
    const response = await fetch(`${BASE_URL}/bp/products`, {
      method: 'PUT',
      headers,
      body: JSON.stringify(product),
    });
    return handleResponse(response);
  } catch (error) {
    console.error('Error updating product:', error);
    throw error;
  }
};

// Delete Financial Product
export const deleteProduct = async (productId: ProductId): Promise<string> => {
  try {
    const response = await fetch(`${BASE_URL}/bp/products?id=${productId}`, {
      method: 'DELETE',
      headers,
    });

    if (!response.ok) {
      const errorData = await response.json();
      if (errorData.message === 'Not product found with that id') {
        throw new Error('No se encontró el producto con ese ID');
      } else {
        throw new Error('Error al eliminar el producto');
      }
    }

    return 'Producto eliminado correctamente';
  } catch (error) {
    console.error('Error al eliminar producto:', error);
    throw error;
  }
};

// Verify Existence of ID
export const verifyID = async (productId: ProductId): Promise<boolean> => {
  try {
    const response = await fetch(`${BASE_URL}/bp/products/verification?id=${productId}`, { headers });
    return handleResponse(response);
  } catch (error) {
    console.error('Error verifying ID:', error);
    throw error;
  }
};

const isJson = (str: string): boolean => {
  try {
    JSON.parse(str);
  } catch (e) {
    return false;
  }
  return true;
};
