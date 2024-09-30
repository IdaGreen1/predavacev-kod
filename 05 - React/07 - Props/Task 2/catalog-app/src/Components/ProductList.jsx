import PropTypes from 'prop-types';
import products from '././App.js';
export default function ProductList(props) {
    function productsSorted() {
        products.map(ProductList) 
        
    };
    productsSorted()

    return (
        <div>
        <h1>All products</h1>
        <p>Data is coming from single ProductList.jsx component</p>
        products.map((product) = (
            <div></div>
        ))
            <img src={props.imageUrl} alt='placehold'></img>   
            <h2>{props.name}</h2> 
            <p>{props.description}</p>
            <p>{props.price}</p>
            <p>{props.rating}</p>
        </div>
    )
   
}
