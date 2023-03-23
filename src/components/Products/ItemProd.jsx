import React from 'react';

const ItemProd = ({product}) => {
    return (
        <div>
            <h2>{product.name}</h2>
            <b>Стоимость в рублях: {product.price}</b>
        </div>
    );
};

export default ItemProd;