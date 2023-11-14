// types.ts
export interface Product {
  id: string;
  name: string;
  description: string;
  logo: string;
  date_release: string; // o Date si prefieres trabajar con objetos Date
  date_revision: string; // o Date
}

export type ProductId = string;
