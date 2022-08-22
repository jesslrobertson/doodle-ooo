import React from 'react'
import { Link } from 'react-router-dom'

export default function Home(){

  return (
    <div className="page home">
      <h1 className='intro'>Doodle-ooo is a minimalistic paint app that allows you to create images and save them to our gallery!</h1>
      <Link to="/studio" className='link-container'>
        <button>
          Start Drawing
        </button>
      </Link>
    </div>
  )
}