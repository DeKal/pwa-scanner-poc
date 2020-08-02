import React, { ReactElement, useState } from 'react'
import CustomerModal from './CustomerModal'
import { Button } from 'react-bootstrap'
const User = (): ReactElement => {
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  return (
    <>
      <Button variant="primary" onClick={() => setShow(true)}>
        Custom Width Modal
      </Button>
      <CustomerModal
        show={show}
        handleClose={handleClose}
        name="Emiel"
        address="Ho chi minh"
        status
      />
    </>
  )
}

export default User
