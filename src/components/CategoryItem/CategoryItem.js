import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import theme from '../../theme.js';

const CategoryItem = ( {item} ) => {

  return (
    <View>
      <Text style={styles.textStyle}>{item}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  
   textStyle: {
    fontSize : theme.fontSizes.body,
    marginHorizontal: 18,
    marginVertical: 6,
    color: theme.color.PrimaryText,
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'Josefin',

    borderColor: theme.color.SecondaryText,
    borderWidth: 2,
    borderRadius: 20,

    textAlign: 'center',
    padding: 12,

   }
});

export default CategoryItem;