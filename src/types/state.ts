import { User } from './user'

export interface Action {
  type: string
}

export interface RootState {
  user: UserState
}

export interface UserState {
  currentUser: User
}
