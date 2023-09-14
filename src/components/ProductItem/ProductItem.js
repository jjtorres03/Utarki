import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import theme from '../../theme.js';

const ProductItem = ({ item }) => {

  return (
    <View style={styles.container}>
      <Text styles={styles.text}>
        {item.title}
      </Text>

    <Image 
    height={80}
    width={80}
    source={{uri: item.images[0]}}
    resizeMode="cover"
    styles={styles.image}
    />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    marginVertical: 10,
    borderColor: theme.color.background,
    borderRadius: 10,
    borderWidth: 3,
    height: 100,
    justifyContent: 'space-around',
    flexDirection: 'row',
    alignItems: 'center',
  },

  text: {
    fontSize: theme.fontSizes.subHeading,
    fontWeight: theme.fontWeigths.normal,
    marginLeft: 18,
    fontFamily : 'Josefin',

  },

  image: {
    marginRight: 10,
   
  }

});

export default ProductItem;

