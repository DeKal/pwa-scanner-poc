export interface ProductData {
  id: string
  name: string
  unit: string
  price: number
  currency: string
}

export interface ProductItem extends ProductData {
  total: number
  quantity: number
}
