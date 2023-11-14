export interface FormsProps {
  initialData: Product;
  onSubmit: (data: Product) => void;
  onReset: () => void;
  onErrors: (data: Errors) => void;
  onFormDataChange: (data: Product) => void;
}

export interface Errors {
  id: string | null;
  name: string | null;
  description: string | null;
  logo: string | null;
  releaseDate: string | null;
  reviewDate: string | null;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  logo: string;
  date_release: string;
  date_revision: string;
}
