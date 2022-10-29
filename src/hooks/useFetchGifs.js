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

    // useEffect hook is used to execute a function when the component is rendered
    useEffect(() => {
        // getGifs(category).then((gifs) => setImages(gifs) );
        // getGifs(category).then(setImages);
        getImages();

    }, []);

    return {
        images,
        isLoading,
        onDeleteCategory
    }
}
