import { StyleSheet, View, Text} from 'react-native'
import React from 'react'



const ItemList = ({item}) => {

  return (
    <View>
     <Text style={styles.textItem}>{item.text}</Text>
    </View>
  )
}

export default ItemList

const styles = StyleSheet.create({

  textItem : {
    fontSize: 20,
    textAlign: 'center',
    color: '#FFFFFF'
  }

})