import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import React, { useState } from 'react';
import theme from '../../theme.js';
import { AntDesign } from "@expo/vector-icons";

const Search = ( {text, setText} ) => {

  const clearText = () => {
    setText(null);
  }

  return (
    <View style={styles.container}>
          <TextInput
        onChangeText={(value) => setText(value)}
        value={text}
        style={styles.inputText}
        placeholder="Busca un producto aquí.."
      />
      <Pressable onPress={() => clearText()}>
         <AntDesign name="close" size={35} color="black" marginTop={30} />
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },
  inputText: {
    marginTop: 30,
    width: '78%',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: theme.color.background,
    padding: 10,
    fontSize: theme.fontSizes.subHeading,
    marginRight: 15,
  }
})




export default Search;