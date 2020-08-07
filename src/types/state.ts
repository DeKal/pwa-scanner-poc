import { User } from './user'
import { ProductItem, ProductData } from './product'

export interface RootState {
  user: UserState
  product: ProductState
}

export interface UserState {
  currentUser: User
  fetchUserStatus: string
}

export interface ProductState {
  products: Record<string, ProductItem>
  currentProduct: ProductData
  fetchProductStatus: string
}
