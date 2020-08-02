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
