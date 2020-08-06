import { User } from './user'
import { ProductItem, ProductData } from './product'

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
