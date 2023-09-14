import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import theme from '../../theme.js';

const Header = ( {title} ) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>{title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container : {
    height: 70,
    width: 'auto',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.color.SecondaryText,
  },

  header: {
    fontSize: theme.fontSizes.subHeading,
    fontWeight : theme.fontWeigths.bold,
    color: theme.color.background,
    fontFamily: 'Indie_Flower',
    marginTop: 20,
  }
});

export default Header;