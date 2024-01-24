import { useState, useEffect } from 'react';
import { getGifs } from '../helpers/getGifs'

export const useFetchGifs = (category) => {

  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true)

  const getImages =  async()=>{
      const listImage = await getGifs(category);
      setImages(listImage);
      setIsLoading(false);
  }

  useEffect(()=>{

      getImages();

  }, []);

  return {
    images,
    isLoading
  }
}

