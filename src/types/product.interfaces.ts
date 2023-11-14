import { StackNavigationProp } from '@react-navigation/stack';

// types.ts
export interface Product {
  id: string;
  name: string;
  description: string;
  logo: string;
  date_release: string;
  date_revision: string;
}

export interface Errors {
  id: string;
  name: string;
  description: string;
  logo: string;
  releaseDate: string;
  reviewDate: string;
}

export const initialProductState: Product = {
  id: '',
  name: '',
  description: '',
  logo: '',
  date_release: '',
  date_revision: '',
};
