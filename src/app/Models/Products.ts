export interface Product {
  photos: Photo[];
  ProductId: number;
  ProductName: string;
  ManufacturerId: number;
  ManufacturerName: string;
  CategoryName: string;
  CategoryId: number;
  Price: number;
  ProductCount: number;
}

export interface Photo {
  PhotoId: number;
  ProductId: number;
  PhotoPath: string;
}
