import PropTypes from 'prop-types';

export default function ProductList(props) {
    return (
        <div>
        <h1>Featured Product</h1>
        <p>Data is coming from a single ProductCard.jsx component</p>
        <img src={props.imageUrl} alt='placehold'></img>
            <h2>{props.name}</h2> 
            <p>{props.description}</p>
            <p>{props.price}</p>
            <p>{props.rating}</p>
        </div>
    )
}