import React from 'react'
import { RepositoryCard } from './RepositoryCard'

describe('<RepositoryCard />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<RepositoryCard />)
  })
})