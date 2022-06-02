import React from "react";
import { useFetchGifs } from "../hooks/useFetchGifs";
import { GiftGridItem } from "./GiftGridItem";


const GifGrid = ({ category }) => {

  /*useEffect(() => {
    getGift(category).then(setImages)
  }, [category]);*/

  const {data:images, loading} = useFetchGifs(category);

  return (
    <>
      <h3>{category}</h3>

      {loading && <p className="card animate__animated animate__bounce">Loading</p>}

      {<div className="card-grid card animate__animated animate__bounce">
        {images.map((img) => (
          <GiftGridItem key={img.id} {...img} />
        ))}
        </div>}
    </>
  );
};

export default GifGrid;
