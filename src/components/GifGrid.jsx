import PropTypes from "prop-types";

// import components
import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({ category }) => {
    const { images, isLoading, onDeleteCategory } = useFetchGifs(category);

    return (
        <>
            <h3>{category}</h3>
            
            {/* {
                isLoading
                ? (<h2>Cargando ...</h2>)
                : null
            } */}

            { isLoading && <h2>Loading...</h2> }
            
            <div className="card-grid">
                {images.map((image) => (
                    <GifItem key={image.id} {...image} onDeleteCategory={onDeleteCategory} />
                ))}
            </div>
        </>
    );
};   

GifGrid.propTypes = {
    category: PropTypes.string.isRequired,
};
