import axios from 'axios'
import React, {useEffect, useState} from 'react'

export default function Gallery(){

  const [galleryImages, setGalleryImages] = useState()

  function getCollection(){
    axios.get('/artwork')
      .then(res => console.log(res))
      .catch(err => console.log(err))
  }

  useEffect(() => {
    
  })

  return(
    <div>
      <h2>Doodle Gallery</h2>
      <div className="gallery-container">
        {/* {galleryImages.map((image) => {
          const imageURL = image
        })} */}

      </div>
    </div>
  )
}