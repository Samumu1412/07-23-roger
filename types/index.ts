export interface Product {
  id: number;
  name: string;
  price_in_cents: number;
  image_url: string;
}

export interface Novel {
  title: string;
  author: string;
  content: string;
  tags?: string[];
}