import React, {useEffect, useState} from 'react';
import ItemProd from "./ItemProd";

const ListProds = ({originalProducts}) => {

    let [products, setProducts] = useState([...originalProducts]);
    let [filterText, setFilterText] = useState("");

    useEffect(() => {
        if (filterText === "") {
            setProducts(originalProducts);
        } else {
            setProducts(originalProducts.filter(prod => prod.name.toLowerCase().includes(filterText.toLowerCase())));
        }
    }, [filterText]);

    return (
        <div>
            <div>
                <input type="text" value={filterText} onChange={(event) => setFilterText(event.target.value)}/>
            </div>
            <div>
                {
                    products.map(product => {
                        return <ItemProd product={product} key={product.id}/>
                    })
                }
            </div>
        </div>
    );
};

export default ListProds;