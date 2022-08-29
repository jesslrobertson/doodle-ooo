import axios from 'axios'
import React, { useState } from 'react'

export default function DrawingPrompt(){
  const [prompt, setPrompt] = useState('')
  
  function getPrompt(){
    axios.get("/prompts")
      .then(res => {
        let lowerCasePrompt = res.data.name.toLowerCase()
        setPrompt(lowerCasePrompt)})
      .catch(err => console.log(err))
  }

  return (
    <div className='prompt-box' >
      { prompt && <h2 className="text">{prompt}</h2>}
      <button
        onClick={getPrompt}
      >{prompt
        ? "New idea"
        : "What should I draw?"
        }
      </button>
    </div>
  )
}