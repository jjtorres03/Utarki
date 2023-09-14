import { FlatList, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import Search from '../../components/Search/Search.js';
import Header from '../../components/Header/Header.js';
import { products } from '../../data/products.js';
import ProductItem from '../../components/ProductItem/ProductItem.js';

const Products = ({ category }) => {

    const [categoryProd, setCategoryProd] = useState([]);
    const [text, setText] = useState(null);

     useEffect(() => {
        const categoryProducts = products.filter((el) => el.category === category);
        setCategoryProd(categoryProducts);

        if (text) {
            const titleProduct = products.filter((el) => el.title.toLowerCase() === text.toLowerCase());
            setCategoryProd(titleProduct);
        } 
}, [text]);


  return (
    <View>
       <Header title="Productos"/>
        <Search  text={text} setText={setText}/>
        <FlatList 
        data={categoryProd}
        keyExtractor={products.id}
        renderItem={({ item }) => <ProductItem  item={item}/>}
        />
    </View>
  )
}
export default Products;

