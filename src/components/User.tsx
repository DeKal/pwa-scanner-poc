import React, { ReactElement, useState } from 'react'
import PropTypes from 'prop-types'
import CustomerModal from './CustomerModal'
import QrScanner from './QrScanner'
import { UserProps } from 'types/props'

const User = ({ user, fetchUser }: UserProps): ReactElement => {
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
      <CustomerModal
        show={show}
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
  fetchUser: () => {},
}
User.propTypes = {
  user: PropTypes.object,
  fetchUser: PropTypes.func,
}
