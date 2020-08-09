import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import Home from './Home'

test('renders a Home component correctly', () => {
  const { container } = render(<Home />)
  expect(container).toMatchSnapshot()
})
test('clicking on a New session button will change route', () => {
  const history = {
    push: jest.fn(),
  }
  const removeUserSessionMock = jest.fn()
  const { container } = render(
    <Home history={history} removeUserSession={removeUserSessionMock} />
  )

  fireEvent(
    container.querySelector('[data-test-id="btn-new-session"]'),
    new MouseEvent('click', {
      bubbles: true,
      cancelable: true,
    })
  )

  expect(history.push.mock.calls[0][0]).toEqual('/user')
  expect(removeUserSessionMock.mock.calls.length).toBe(1)
})
