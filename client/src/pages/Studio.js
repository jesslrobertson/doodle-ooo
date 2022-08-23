import React from 'react'
import Canvas from "../components/Canvas"

export default function Studio(){

  function promptify(array){
    const objectArray = []
    array.map(item => {
      let object = {
        "name": item
      }
      objectArray.push(object)
    })
    return objectArray
  }
  
  console.log(promptify(prompts))

  return (
    <div className="page studio">
      <h1>This is the Studio Page</h1>
      <Canvas />
    </div>
  )
}