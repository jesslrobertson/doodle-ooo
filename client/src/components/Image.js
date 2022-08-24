import React from 'react'

export default function Image(props){
  const {Url, _id} = props
  return(
    <div className="img-container">
      <img 
        src={Url}
        _id={_id}
        className="gallery-img"
      />
      <button>
        delete
      </button>
    </div>
  )
}