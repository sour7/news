import React from 'react'
import { useeGlobalContext } from '../context/Context'

const Search = () => {
    const name= useeGlobalContext()
  return (
    <div>
      {name}
    </div>
  )
}

export default Search
