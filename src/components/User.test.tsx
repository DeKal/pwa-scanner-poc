import React from 'react'
import { render } from '@testing-library/react'
import User from './User'

const user = {
  id: 'id',
  firstName: 'John',
  lastName: 'Cena',
  address: 'My address',
  active: true,
}

jest.mock('./QrScanner', () => {
  const FakeQrScanner = (props) => (
    <div className="mockQrScanner">{JSON.stringify(props)}</div>
  )
  return {
    __esModule: true,
    default: FakeQrScanner,
  }
})

jest.mock('./CustomerModal', () => {
  const FakeCustomerModal = (props) => (
    <div className="mockCustomerModal">{JSON.stringify(props)}</div>
  )
  return {
    __esModule: true,
    default: FakeCustomerModal,
  }
})

test('renders a User component correctly', () => {
  const { container } = render(<User user={user} />)
  expect(container).toMatchSnapshot()
})
