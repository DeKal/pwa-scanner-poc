import { User } from 'types/user'
import { RootState } from 'types/state'

export const getUser = (state: RootState): User => state.user.currentUser
