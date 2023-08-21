import {StyleSheet, Text, View, Button } from 'react-native';


export default function App() {
  return (

    <View style={styles.container}>
       <Button color="#f194ff" title='Hola Coders!' onPress={() => alert('Welcome a Utarki')}>
         <Text style={{color: "#f2e2d2",  fontWeight: 'bold', fontSize: 20}}>Hello Coders, Presiona el texto!</Text>
       </Button> 
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#9fb7b9',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

