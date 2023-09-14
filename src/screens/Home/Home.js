import { View } from 'react-native';
import React from 'react';
import Header from '../../components/Header/Header.js';
import Categories from '../../components/Categories/Categories.js';

const Home = () => {
  return (
    <View>
      <Header  title="Categorias"/>
      <Categories />
    </View>
  )
}

export default Home;

