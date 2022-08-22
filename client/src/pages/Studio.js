import React from 'react'
import Canvas from "../components/Canvas"
import Alert from "../components/Alert"

export default function Studio(props){
  const { setAlert } = Alert

  return (
    <div className="page studio">
      <Alert />
      <h1>This is the Studio Page</h1>
      <Canvas 
        setAlert={setAlert}
      />
    </div>
  )
}