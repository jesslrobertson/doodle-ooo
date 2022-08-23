import React from 'react'
import Canvas from "../components/Canvas"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Studio(){
  const notify = (message) => toast(message);

  // function promptify(array){
  //   const objectArray = []
  //   array.map(item => {
  //     let object = {
  //       "name": item
  //     }
  //     objectArray.push(object)
  //   })
  //   return objectArray
  // }
  
  // console.log(promptify(prompts))

  return (
    <div className="page studio">
      <h1>This is the Studio Page</h1>
      <ToastContainer />
      <Canvas 
        notify={notify}
      />
    </div>
  )
}