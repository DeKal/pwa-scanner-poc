import React, { ReactElement } from 'react'
import { RemoveSession } from 'types/props'
const ButtonRemoveSession = ({
  removeUserSession,
  history,
}: RemoveSession): ReactElement => {
  return (
    <button
      type="button"
      data-test-id="btn-new-session"
      className="btn btn-outline-dark mr-3"
      onClick={() => {
        removeUserSession()
        history.push('/')
      }}
    >
      New session
    </button>
  )
}
export default ButtonRemoveSession
