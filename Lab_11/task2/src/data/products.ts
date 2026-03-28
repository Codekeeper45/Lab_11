export type Product = {
  id: string;
  name: string;
  price: number;
  category: string;
  description: string;
  image: string;
};

export const products: Product[] = [
  {
    id: '1',
    name: 'Wireless Headphones',
    price: 129.99,
    category: 'Audio',
    description: 'Comfortable over-ear headphones with clear sound and long battery life.',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=1200'
  },
  {
    id: '2',
    name: 'Smart Watch',
    price: 199.99,
    category: 'Wearables',
    description: 'Track your fitness, sleep, and notifications in one simple watch.',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=1200'
  },
  {
    id: '3',
    name: 'Portable Speaker',
    price: 89.99,
    category: 'Audio',
    description: 'Compact Bluetooth speaker with rich bass and waterproof design.',
    image: 'https://images.unsplash.com/photo-1589003077984-894e133dabab?w=1200'
  }
];
