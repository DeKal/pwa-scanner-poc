import { User } from './user'

interface History {
  push: (string) => void
}

export interface HomeProps {
  history: History
  removeUserSession: () => void
}

export interface CustomerModalProps {
  name: string
  address: string
  status: boolean
  show: boolean
  handleClose?: () => void
}

export interface QrScannerProps {
  mode: string
  setQrCode: (string) => void
}

export interface UserProps {
  user: User
  fetchUser: (string) => void
}
