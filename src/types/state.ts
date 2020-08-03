import { User } from './user'

export interface RootState {
  user: UserState
}

export interface UserState {
  currentUser: User
  fetchUserStatus: string
}
