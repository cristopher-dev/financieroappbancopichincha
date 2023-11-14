import { StackNavigationProp } from '@react-navigation/stack';
import { Product } from '../../types/product.interfaces';

export const initialProductState: Product = {
  id: '',
  name: '',
  description: '',
  logo: '',
  date_release: '',
  date_revision: '',
};

export interface D2Props {
  navigation: StackNavigationProp<any, any>;
}
