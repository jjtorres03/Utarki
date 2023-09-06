import {StyleSheet, Text, View, FlatList, Modal, Pressable} from 'react-native';
import  React, { useState } from "react";
import { Octicons } from '@expo/vector-icons';

// Components 
import AddItem from './src/components/AddItem/AddItem.js';
import ItemList from './src/components/ItemList/ItemList.js';



const initialState = [{
  id: 1,
  text: "Lapiz"
}];



export default function App() {

// Seteamos Estados!

   const [text, setText] = React.useState("");
   const [list, setList] = React.useState(initialState);

   //Modal
   const [isModalVisible, setIsModalVisible] = useState(false);
   
   // Funcion Agregamos un Producto

   const addItem = () => {
    list.push({
      id : Math.random(),
      text : text,
    });

    setList(list);
    setText("");

   };

   const clearList = () => {
    setList([]);
    setIsModalVisible(false);
   }

  return (
  
      <View style={styles.container}>
        <View style={styles.containerList}>
          <Text style={styles.texto}>Lista de Compra :</Text>
           <Octicons style={styles.icon} name="checklist" color="#f7ffff" />
        </View>

        <Modal
        animationType="slide"
        transparent={true}
        visible={isModalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setIsModalVisible(!isModalVisible);
        }}>
      
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Deseas eliminar los productos de la lista?</Text>
            <View style={styles.containerButton}>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => clearList()}>
              <Text style={styles.textStyle}>SI</Text>
            </Pressable>
                <Pressable style={[styles.button, styles.buttonOpen]} onPress={() => setIsModalVisible(false)}>
                <Text style={styles.textStyle}>NO</Text>
               </Pressable>
            </View>
          </View>
      </Modal>

        <AddItem text={text} setText={setText} addItem={addItem} setIsModalVisible={setIsModalVisible}/>

      <FlatList
        data={list}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <ItemList item={item} />}
      />
      </View>

   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#91e0b9'   //#CFD8DC',

  },

  texto: {
    color: '#f7ffff',
    marginTop: 100,
    fontWeight: 'bold',
    fontSize: 30,
    marginLeft: 60
 
  },

  containerList: {
    display: 'flex',
    flexDirection: 'row',
  },

  icon: {
    marginTop: 100,
    marginLeft: 25,
    fontSize: 40
  
  },
    
// Modal
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },

  containerButton : {
    display: 'flex', 
    flexDirection: 'row'

  },
  
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
 
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
    marginLeft: 15,
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    fontSize: 15,
    fontWeight: '500'
  },
});
