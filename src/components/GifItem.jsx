import PropTypes from 'prop-types';

export const GifItem = ({ title, url, id, onDeleteCategory }) => {

    return (
        <div className='card'>
            <img src={url} alt={title} />
            <p>{title}</p>
            {/* Show conditionaly button */}
            {onDeleteCategory && <button onClick={() => onDeleteCategory(id)}>Delete</button>}
        </div>
    );
};


GifItem.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    onDeleteCategory: PropTypes.func,
}
