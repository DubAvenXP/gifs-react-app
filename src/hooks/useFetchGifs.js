// import helpers
import { useState, useEffect } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category) => {

    const [images, setImages] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    const getImages = async () => {
        const gifs = await getGifs(category);
        setImages(gifs);
        setIsLoading(false);
    }

    const onDeleteCategory = (id) => {
        setImages(images.filter(img => img.id !== id));
    }

    useEffect(() => {
        getImages();
    }, []);

    return {
        images,
        isLoading,
        onDeleteCategory
    }
}
