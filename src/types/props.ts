import { User } from './user'
import { ProductItem, ProductData, UpdateCart } from './product'

interface History {
  push: (url: string) => void
}

export interface HomeProps {
  history: History
  removeUserSession: () => void
}

export interface ModalProps {
  show: boolean
  handleClose?: () => void
}

export interface CustomerModalProps extends ModalProps {
  name: string
  address: string
  status: boolean
}
export interface OrderModalProps extends ModalProps {
  removeUserSession?: () => void
  history: History
}

export interface AddProductModalProps extends ModalProps {
  product: ProductData
  addToCart: (p: ProductItem) => void
}

export interface QrScannerProps {
  mode: string
  setQrCode: (code: string) => void
}

export interface UserProps {
  user: User
  fetchUserStatus: string
  fetchUser: (userId: string) => void
}
export interface ProductProps {
  currentProduct: ProductData
  fetchProductStatus: string
  addToCart: (p: ProductItem) => void
  fetchProduct: (productId: string) => void
  removeUserSession: () => void
  history: History
  products: ProductItem[]
  productLength: number
}
export interface CartProps {
  history: History
  products: ProductItem[]
  updateCart: (p: UpdateCart) => void
}
export interface ProductScanProps {
  onDetected: (result: string) => void
}
