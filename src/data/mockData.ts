// Mock data for the entire application
import { LaptopIcon, WrenchIcon, ShieldCheckIcon, CpuChipIcon } from '@heroicons/react/24/outline';

export interface Category {
  id: string;
  name: string;
  image: string;
  description: string;
}

export interface Brand {
  id: string;
  name: string;
  icon: string;
  series: string[];
  categoryId: string;
}

export interface SubProduct {
  id: string;
  name: string;
  image: string;
  price: number;
  quality: string;
  modelPrice: number;
  sellPrice: number;
  color: string;
  storage: string;
  productId: string;
}

export interface Product {
  id: string;
  name: string;
  image: string;
  stock: number;
  price: number;
  description: string;
  brandId: string;
  specs: {
    processor: string;
    ram: string;
    storage: string;
    display: string;
    graphics: string;
  };
}

export interface Service {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
  estimatedTime: string;
  warranty: string;
}

export interface Accessory {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  inStock: boolean;
  quantity: number;
  image: string;
}

export interface Complaint {
  id: string;
  customer: string;
  issueArea: string;
  status: 'Pending' | 'Assigned' | 'Resolved';
  assignedTechnician: string;
  createdAt: string;
  description: string;
}

export interface Warranty {
  id: string;
  productName: string;
  customerName: string;
  purchaseDate: string;
  expiryDate: string;
  status: 'active' | 'expired' | 'claimed';
}

export interface Employee {
  id: string;
  name: string;
  role: string;
  email: string;
  phone: string;
  availability: boolean;
  image: string;
}

// Categories
export const categories: Category[] = [
  {
    id: 'gaming',
    name: 'Gaming Laptops',
    image: 'https://images.pexels.com/photos/777001/pexels-photo-777001.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'High-performance laptops for gaming enthusiasts'
  },
  {
    id: 'business',
    name: 'Business Laptops',
    image: 'https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Professional laptops for business and productivity'
  },
  {
    id: 'student',
    name: 'Student Laptops',
    image: 'https://images.pexels.com/photos/4050299/pexels-photo-4050299.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Affordable and reliable laptops for students'
  },
  {
    id: 'ultrabook',
    name: 'Ultrabooks',
    image: 'https://images.pexels.com/photos/812264/pexels-photo-812264.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Lightweight and portable premium laptops'
  }
];

// Brands
export const brands: Brand[] = [
  {
    id: 'hp',
    name: 'HP',
    icon: 'https://images.pexels.com/photos/777001/pexels-photo-777001.jpeg?auto=compress&cs=tinysrgb&w=100',
    series: ['Pavilion', 'Envy', 'Omen', 'EliteBook'],
    categoryId: 'business'
  },
  {
    id: 'dell',
    name: 'Dell',
    icon: 'https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg?auto=compress&cs=tinysrgb&w=100',
    series: ['Inspiron', 'XPS', 'Alienware', 'Latitude'],
    categoryId: 'gaming'
  },
  {
    id: 'lenovo',
    name: 'Lenovo',
    icon: 'https://images.pexels.com/photos/4050299/pexels-photo-4050299.jpeg?auto=compress&cs=tinysrgb&w=100',
    series: ['ThinkPad', 'IdeaPad', 'Legion', 'Yoga'],
    categoryId: 'student'
  },
  {
    id: 'asus',
    name: 'ASUS',
    icon: 'https://images.pexels.com/photos/812264/pexels-photo-812264.jpeg?auto=compress&cs=tinysrgb&w=100',
    series: ['ROG', 'ZenBook', 'VivoBook', 'TUF'],
    categoryId: 'ultrabook'
  }
];

// Products
export const products: Product[] = [
  {
    id: 'hp-pavilion-15',
    name: 'HP Pavilion 15',
    image: 'https://images.pexels.com/photos/777001/pexels-photo-777001.jpeg?auto=compress&cs=tinysrgb&w=800',
    stock: 25,
    price: 799,
    description: 'Perfect for everyday computing with style and performance',
    brandId: 'hp',
    specs: {
      processor: 'Intel Core i5-11th Gen',
      ram: '8GB DDR4',
      storage: '512GB SSD',
      display: '15.6" FHD IPS',
      graphics: 'Intel Iris Xe'
    }
  },
  {
    id: 'dell-xps-13',
    name: 'Dell XPS 13',
    image: 'https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg?auto=compress&cs=tinysrgb&w=800',
    stock: 15,
    price: 1299,
    description: 'Premium ultrabook with stunning design and performance',
    brandId: 'dell',
    specs: {
      processor: 'Intel Core i7-12th Gen',
      ram: '16GB LPDDR5',
      storage: '1TB SSD',
      display: '13.4" UHD+ TouchScreen',
      graphics: 'Intel Iris Xe'
    }
  },
  {
    id: 'lenovo-thinkpad-x1',
    name: 'Lenovo ThinkPad X1 Carbon',
    image: 'https://images.pexels.com/photos/4050299/pexels-photo-4050299.jpeg?auto=compress&cs=tinysrgb&w=800',
    stock: 8,
    price: 1599,
    description: 'Business-grade laptop with exceptional durability',
    brandId: 'lenovo',
    specs: {
      processor: 'Intel Core i7-12th Gen',
      ram: '16GB LPDDR5',
      storage: '1TB SSD',
      display: '14" WUXGA IPS',
      graphics: 'Intel Iris Xe'
    }
  },
  {
    id: 'asus-rog-strix',
    name: 'ASUS ROG Strix G15',
    image: 'https://images.pexels.com/photos/812264/pexels-photo-812264.jpeg?auto=compress&cs=tinysrgb&w=800',
    stock: 12,
    price: 1199,
    description: 'Gaming laptop with powerful graphics and RGB lighting',
    brandId: 'asus',
    specs: {
      processor: 'AMD Ryzen 7 5800H',
      ram: '16GB DDR4',
      storage: '1TB SSD',
      display: '15.6" FHD 144Hz',
      graphics: 'NVIDIA RTX 3060'
    }
  }
];

// Sub Products
export const subProducts: SubProduct[] = [
  {
    id: 'hp-pavilion-15-silver',
    name: 'HP Pavilion 15 - Silver',
    image: 'https://images.pexels.com/photos/777001/pexels-photo-777001.jpeg?auto=compress&cs=tinysrgb&w=800',
    price: 799,
    quality: 'Premium',
    modelPrice: 899,
    sellPrice: 799,
    color: 'Silver',
    storage: '512GB SSD',
    productId: 'hp-pavilion-15'
  },
  {
    id: 'hp-pavilion-15-black',
    name: 'HP Pavilion 15 - Black',
    image: 'https://images.pexels.com/photos/777001/pexels-photo-777001.jpeg?auto=compress&cs=tinysrgb&w=800',
    price: 799,
    quality: 'Premium',
    modelPrice: 899,
    sellPrice: 799,
    color: 'Black',
    storage: '512GB SSD',
    productId: 'hp-pavilion-15'
  }
];

// Services
export const services: Service[] = [
  {
    id: 'laptop-repair',
    name: 'Laptop Hardware Repair',
    description: 'Complete hardware diagnosis and repair service',
    price: 150,
    category: 'Repairs',
    image: 'https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg?auto=compress&cs=tinysrgb&w=800',
    estimatedTime: '2-3 days',
    warranty: '3 months'
  },
  {
    id: 'screen-replacement',
    name: 'Screen Replacement',
    description: 'LCD/LED screen replacement with original parts',
    price: 200,
    category: 'Repairs',
    image: 'https://images.pexels.com/photos/4050299/pexels-photo-4050299.jpeg?auto=compress&cs=tinysrgb&w=800',
    estimatedTime: '1-2 days',
    warranty: '6 months'
  },
  {
    id: 'ram-upgrade',
    name: 'RAM Upgrade',
    description: 'Upgrade your laptop memory for better performance',
    price: 100,
    category: 'Upgrades',
    image: 'https://images.pexels.com/photos/812264/pexels-photo-812264.jpeg?auto=compress&cs=tinysrgb&w=800',
    estimatedTime: '1 day',
    warranty: '2 years'
  },
  {
    id: 'virus-removal',
    name: 'Virus Removal & Cleanup',
    description: 'Complete system cleanup and virus removal',
    price: 80,
    category: 'Software Support',
    image: 'https://images.pexels.com/photos/777001/pexels-photo-777001.jpeg?auto=compress&cs=tinysrgb&w=800',
    estimatedTime: '1 day',
    warranty: '1 month'
  },
  {
    id: 'deep-cleaning',
    name: 'Deep Cleaning Service',
    description: 'Professional laptop cleaning and maintenance',
    price: 50,
    category: 'Cleaning',
    image: 'https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg?auto=compress&cs=tinysrgb&w=800',
    estimatedTime: '2 hours',
    warranty: 'N/A'
  },
  {
    id: 'data-recovery',
    name: 'Data Recovery',
    description: 'Recover lost or corrupted data from your laptop',
    price: 250,
    category: 'Software Support',
    image: 'https://images.pexels.com/photos/4050299/pexels-photo-4050299.jpeg?auto=compress&cs=tinysrgb&w=800',
    estimatedTime: '3-5 days',
    warranty: 'N/A'
  }
];

// Accessories
export const accessories: Accessory[] = [
  {
    id: 'wireless-mouse',
    name: 'Wireless Optical Mouse',
    description: 'Ergonomic wireless mouse with 2.4GHz connectivity',
    price: 25,
    category: 'Peripherals',
    inStock: true,
    quantity: 50,
    image: 'https://images.pexels.com/photos/777001/pexels-photo-777001.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: 'laptop-stand',
    name: 'Adjustable Laptop Stand',
    description: 'Aluminum laptop stand with adjustable height and angle',
    price: 45,
    category: 'Accessories',
    inStock: true,
    quantity: 30,
    image: 'https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: 'laptop-bag',
    name: 'Professional Laptop Bag',
    description: 'Premium laptop bag with multiple compartments',
    price: 60,
    category: 'Bags',
    inStock: false,
    quantity: 0,
    image: 'https://images.pexels.com/photos/4050299/pexels-photo-4050299.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: 'usb-hub',
    name: '7-Port USB 3.0 Hub',
    description: 'High-speed USB hub with individual power switches',
    price: 35,
    category: 'Connectivity',
    inStock: true,
    quantity: 25,
    image: 'https://images.pexels.com/photos/812264/pexels-photo-812264.jpeg?auto=compress&cs=tinysrgb&w=800'
  }
];

// Complaints
export const complaints: Complaint[] = [
  {
    id: 'comp-001',
    customer: 'John Smith',
    issueArea: 'Screen Flickering',
    status: 'Pending',
    assignedTechnician: 'Not Assigned',
    createdAt: '2024-01-15',
    description: 'Laptop screen flickers intermittently during use'
  },
  {
    id: 'comp-002',
    customer: 'Sarah Johnson',
    issueArea: 'Battery Issues',
    status: 'Assigned',
    assignedTechnician: 'Mike Wilson',
    createdAt: '2024-01-14',
    description: 'Battery drains too quickly and does not hold charge'
  },
  {
    id: 'comp-003',
    customer: 'David Brown',
    issueArea: 'Keyboard Problems',
    status: 'Resolved',
    assignedTechnician: 'Lisa Chen',
    createdAt: '2024-01-10',
    description: 'Several keys not working properly'
  }
];

// Warranties
export const warranties: Warranty[] = [
  {
    id: 'war-001',
    productName: 'HP Pavilion 15',
    customerName: 'Alice Cooper',
    purchaseDate: '2023-06-15',
    expiryDate: '2024-06-15',
    status: 'active'
  },
  {
    id: 'war-002',
    productName: 'Dell XPS 13',
    customerName: 'Bob Wilson',
    purchaseDate: '2022-12-20',
    expiryDate: '2023-12-20',
    status: 'expired'
  },
  {
    id: 'war-003',
    productName: 'Lenovo ThinkPad X1',
    customerName: 'Carol Davis',
    purchaseDate: '2023-08-10',
    expiryDate: '2024-08-10',
    status: 'active'
  }
];

// Employees
export const employees: Employee[] = [
  {
    id: 'emp-001',
    name: 'Mike Wilson',
    role: 'Senior Technician',
    email: 'mike.wilson@shinelaptops.com',
    phone: '+1 (555) 123-4567',
    availability: true,
    image: 'https://images.pexels.com/photos/777001/pexels-photo-777001.jpeg?auto=compress&cs=tinysrgb&w=300'
  },
  {
    id: 'emp-002',
    name: 'Lisa Chen',
    role: 'Hardware Specialist',
    email: 'lisa.chen@shinelaptops.com',
    phone: '+1 (555) 234-5678',
    availability: true,
    image: 'https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg?auto=compress&cs=tinysrgb&w=300'
  },
  {
    id: 'emp-003',
    name: 'Tom Rodriguez',
    role: 'Software Engineer',
    email: 'tom.rodriguez@shinelaptops.com',
    phone: '+1 (555) 345-6789',
    availability: false,
    image: 'https://images.pexels.com/photos/4050299/pexels-photo-4050299.jpeg?auto=compress&cs=tinysrgb&w=300'
  }
];

// Stats
export const stats = {
  professionals: 25,
  servicesCompleted: 1250,
  branches: 8,
  sales: 3500
};

// Testimonials
export const testimonials = [
  {
    id: 1,
    name: 'Emily Watson',
    role: 'Business Owner',
    content: 'Shine Laptops provided exceptional service for my business laptop. Quick, professional, and affordable!',
    rating: 5,
    image: 'https://images.pexels.com/photos/777001/pexels-photo-777001.jpeg?auto=compress&cs=tinysrgb&w=300'
  },
  {
    id: 2,
    name: 'Mark Thompson',
    role: 'Student',
    content: 'Great selection of laptops and amazing customer service. They helped me find the perfect laptop for my studies.',
    rating: 5,
    image: 'https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg?auto=compress&cs=tinysrgb&w=300'
  },
  {
    id: 3,
    name: 'Jennifer Lee',
    role: 'Graphic Designer',
    content: 'Professional repair service and fair pricing. My laptop runs like new after their maintenance.',
    rating: 5,
    image: 'https://images.pexels.com/photos/4050299/pexels-photo-4050299.jpeg?auto=compress&cs=tinysrgb&w=300'
  }
];

export const issueAreas = [
  'Screen Flickering',
  'Battery Issues',
  'Keyboard Problems',
  'Overheating',
  'Software Crashes',
  'Hardware Failure',
  'Network Connectivity',
  'Audio Problems'
];