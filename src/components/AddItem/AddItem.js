import { View, StyleSheet, TextInput, Pressable} from 'react-native';
import React from 'react';

// Iconos
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';


const AddItem = ({text, setText, addItem, setIsModalVisible}) => {


  return (
    <View style={styles.containerAdd}>
        <TextInput
       placeholder='Agrega un producto'
       style={styles.input}
       value={text}
       onChangeText={(value) => setText(value)}
      />
      
        <Pressable>
          <AntDesign style={styles.icon} name="addfile" size={30} color="black"  onPress={() => addItem()} />
        </Pressable>
        <Pressable>
          <Entypo style={styles.icon} name="trash" size={30} color="black" onPress={() => setIsModalVisible(true)} />
        </Pressable>
      </View>
      
  )
}



const styles = StyleSheet.create({
    
  containerAdd: {
    marginTop : 20,
    display: 'flex',
    flexDirection: 'row',
    
  },

    input: {
        borderColor: '#def7ee',
        width: 250,
        height: 40,
        margin: 10,
        borderWidth: 3,
        padding: 10,
        textAlign: 'center',
        marginLeft: 50       
 },

 icon: {
  marginTop: 15,
  color : '#f7ffff'
 }


})




export default AddItem


