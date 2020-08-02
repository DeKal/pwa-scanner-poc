export const toSuccess = (actionType: string): string => `${actionType}_SUCCESS`

export const toError = (actionType: string): string => `${actionType}_ERROR`

export const toRequest = (actionType: string): string => `${actionType}_REQUEST`
