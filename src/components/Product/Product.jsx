import React, {useEffect, useState} from 'react';

const Product = ({name, price, provider, promo, change}) => {

    let [localPrice, setLocalPrice] = useState(price);

    useEffect(() => {
        change(localPrice);
    }, [localPrice]);

    return (
        <div>
            <h2>{name}</h2>
            <h2>{price}</h2>
            <h2>{provider.country}</h2>
            <h2>{provider.price}</h2>
            <ul>
                {
                    promo.map((item, index) => {
                        return <li key={index}>{item}</li>
                    })
                }
            </ul>

            <div>
                <input type="number" value={localPrice} onChange={(event) =>
                    setLocalPrice(event.target.value)
                }/>
            </div>

        </div>
    );
};

export default Product;
