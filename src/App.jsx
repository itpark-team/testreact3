import Header from "./components/Header/Header";
import Content from "./components/Content/Content";
import Footer from "./components/Footer/Footer";
import Product from "./components/Product/Product";
import {useState} from "react";
import ListProds from "./components/Products/ListProds";

const App = () => {

    // let [prov, setProv] = useState({country: "USA", price: 10, someobj: {a: 1, b: 2}});
    //
    // const changeProv = (newPrice) => {
    //     setProv({...prov, price: newPrice});
    // }

    let productsList1 = [
        {id: 1, name: "Манго", price: 23},
        {id: 2, name: "Апельсин", price: 32},
        {id: 3, name: "Маракуйя", price: 41},
    ];

    let productsList2 = [
        {id: 1, name: "Огурец", price: 6},
        {id: 2, name: "Помидор", price: 345},
        {id: 3, name: "Тыква", price: 123},
    ];

    return (
        <div>
            {/*<Header/>*/}
            {/*<Content/>*/}
            {/*<Content/>*/}
            {/*<Content/>*/}
            {/*<Footer/>*/}

            {/*<Product name={"Яблоко"} price={20} provider={{country: "USA", price: 10}}*/}
            {/*         promo={["вкусное", "сладкое", "наливное"]} change={changeProv}/>*/}
            {/*<div>*/}
            {/*    <div>!!!{prov.price}</div>*/}
            {/*    <div>!!!{prov.country}</div>*/}
            {/*</div>*/}

            <ListProds originalProducts={productsList1}/>
            <ListProds originalProducts={productsList2}/>
        </div>
    );
}

export default App;
