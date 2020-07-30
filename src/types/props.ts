interface History {
  push: (string) => void
}

export interface HomeProps {
  history: History
  removeUserSession: () => void
}
