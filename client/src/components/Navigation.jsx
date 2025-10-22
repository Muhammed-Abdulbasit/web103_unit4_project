import React from 'react'
import '../App.css'
import '../css/Navigation.css'

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li><h1>Mug Maker ☕</h1></li>
      </ul>

      <ul>
        <li><a href='/' role='button'>Create</a></li>
        <li><a href='/custommugs' role='button'>View Mugs</a></li>
      </ul>
    </nav>
  )
}

export default Navigation
