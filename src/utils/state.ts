export const fetchStatuses = {
  DEFAULT: 'DEFAULT',
  SUCCESS: 'SUCCESS',
  ERROR: 'ERROR',
  REQUEST: 'REQUEST',
}

export const toSuccess = (actionType: string): string =>
  `${actionType}_${fetchStatuses.SUCCESS}`

export const toError = (actionType: string): string =>
  `${actionType}_${fetchStatuses.ERROR}`

export const toRequest = (actionType: string): string =>
  `${actionType}_${fetchStatuses.REQUEST}`
