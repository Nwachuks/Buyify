import { Category } from './category.model';

export interface Product {
  _id: string;
  title: string;
  slug: string;
  description: string;
  category: Category;
  price: number;
  image: string;
}
