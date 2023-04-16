import React from 'react'
import { SearchResults } from './SearchResults'

describe('<SearchResults />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<SearchResults />)
  })
})