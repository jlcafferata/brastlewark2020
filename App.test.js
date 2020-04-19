import React from 'react'
import { render } from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom'

import App from './App'

test('renders learn react link', () => {
  const { container } = render(
    <Router>
      <App />
    </Router>
  )
  container.querySelector('.main-content')
  expect(container.firstChild).toMatchSnapshot()
})
