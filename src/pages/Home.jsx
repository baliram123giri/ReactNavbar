import React from 'react'
import Navigation from '../components/Navigation/Navigation'
import Context from './Context'

export default function Home() {
  return (
    <Navigation>
        <Context text="Home"/>
    </Navigation>
  )
}
