import { StackNavigationProp } from '@react-navigation/stack';

export interface Product {
  id: string;
  name: string;
}

export interface Props {
  navigation: StackNavigationProp<any, any>;
}

export interface RecordCounterProps {
  count: number;
}
