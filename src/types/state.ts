import { User } from './user'

export interface ActionType {
  type: string
}

export interface ActionPayload<T> {
  payload: T
}

export interface Action<T> extends ActionType, ActionPayload<T> {}

export interface RootState {
  user: UserState
}

export interface UserState {
  currentUser: User
  fetchUserStatus: string
}
