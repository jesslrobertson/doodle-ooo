import React from "react";
import axios from "axios";

export default function Image(props) {
  const { Url, _id, setGalleryImages } = props;

  function removeImage(imgID) {
    axios
      .delete(`/gallery/${imgID}`)
      .then((res) => {
        setGalleryImages((prevImages) =>
          prevImages.filter((image) => image._id !== imgID)
        );
      })
      .catch((err) => console.log(err));
  }
  return (
    <div className="img-container">
      <img
        src={Url}
        _id={_id}
        className="gallery-img"
        alt="Drawing from Doodle-ooo studio"
      />
      <button
        onClick={() => {
          removeImage(_id);
        }}
      >
        delete
      </button>
    </div>
  );
}
