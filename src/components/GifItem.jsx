import PropTypes from 'prop-types';

export const GifItem = ({ title, url, id, onDeleteCategory }) => {

    const onDelete = () => {
        onDeleteCategory(id);
    }

    return (
        <div className='card'>
            <img src={url} alt={title} />
            <p>{title}</p>
            <button onClick={onDelete}>Borrar</button>
        </div>
    );
};


GifItem.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    onDeleteCategory: PropTypes.func.isRequired,
}
