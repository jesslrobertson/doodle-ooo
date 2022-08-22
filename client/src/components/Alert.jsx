import React, {useContext} from 'react'
import { Context } from './Context'

export default function Alert(props){

  const { alert, setAlert } = useContext(Context)

  return (
    <>
    { alert && <div 
      className='alert'
      onClick={() => setAlert(false)}>
        <h5>Image Saved!</h5>
      </div>
    }
    </>
  )
}