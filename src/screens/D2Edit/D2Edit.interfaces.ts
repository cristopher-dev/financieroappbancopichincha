import { StackNavigationProp } from '@react-navigation/stack';
import { Product } from '../../types/product.interfaces';

export interface D2Props {
  route: {
    params: {
      product: Product;
    };
  };
  navigation: StackNavigationProp<any, any>;
}
