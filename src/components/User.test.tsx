import React from 'react'
import { render } from '@testing-library/react'
import User from './User'

test('renders a User component correctly', () => {
  const { container } = render(<User />)
  expect(container).toMatchSnapshot()
})
