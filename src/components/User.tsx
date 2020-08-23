import React, { ReactElement, useState } from 'react'
import PropTypes from 'prop-types'
import CustomerModal from './CustomerModal'
import Button from 'react-bootstrap/Button'
import QrScanner from './QrScanner'
import { UserProps } from 'types/props'
import { fetchStatuses } from 'utils/state'

const User = ({
  user,
  fetchUserStatus,
  fetchUser,
  removeUserSession,
  history,
}: UserProps): ReactElement => {
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  return (
    <div>
      <h2 className="font-weight-bold text-dark text-center mt-3">
        Foodsavers
      </h2>
      <h5 className="text-center mt-3 mb-3 pl-3 pr-3">
        Scan the QR code of the product for adding to cart
      </h5>
      <QrScanner
        mode="environment"
        setQrCode={(qrCode) => {
          fetchUser(qrCode)
          setShow(true)
        }}
      />
      <Button
        data-test-id="btn-new-session"
        className="mt-5 mb-5 mx-auto w-25"
        variant="outline-dark"
        size="lg"
        block
        onClick={() => {
          removeUserSession()
          history.push('/')
        }}
      >
        New session
      </Button>
      <CustomerModal
        show={show && fetchUserStatus === fetchStatuses.SUCCESS}
        handleClose={handleClose}
        name={`${user.firstName} ${user.lastName}`}
        address={user.address}
        status={user.active}
      />
    </div>
  )
}

export default User
User.defaultProps = {
  user: {},
  fetchUserStatus: null,
  fetchUser: () => {},
}
User.propTypes = {
  user: PropTypes.object,
  fetchUserStatus: PropTypes.string,
  fetchUser: PropTypes.func,
}
