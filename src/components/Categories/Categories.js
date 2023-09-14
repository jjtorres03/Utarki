import { FlatList, StyleSheet, View } from 'react-native';
import React from 'react';
import { categories } from '../../data/categories.js';
import CategoryItem from '../CategoryItem/CategoryItem.js';


const Categories = () => {
  return (
    <View style={styles.container}>
      <FlatList 
      data={categories}
      keyExtractor={(key) => key}
      renderItem={({ item }) => <CategoryItem item={item} />}
      /> 
    </View>
  )
}


const styles = StyleSheet.create({
    container: {
      paddingTop: 15,
    }
})

export default Categories;
