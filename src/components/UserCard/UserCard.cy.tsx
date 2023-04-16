import React from 'react'
import { UserCard } from './UserCard'

describe('<UserCard />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<UserCard />)
  })
})