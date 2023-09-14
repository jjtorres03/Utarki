import { StyleSheet, SafeAreaView} from 'react-native';
import  React from "react";
import { useFonts } from "expo-font";
// Components 
import Home from './src/screens/Home/Home.js'
import Header from './src/components/Header/Header.js';
import Search from './src/components/Search/Search.js';
import Products from './src/screens/Products/Products.js';


// Fonts theme
import { fonts } from './fonts.js';


export default function App() {

  const [fontsLoaded] = useFonts(fonts);

  if (fontsLoaded === false) {
    return true;
  }
  
  return (
   <SafeAreaView>
       {/*  <Home />*/}
        {/* <Header title="Producto"/> */}
        {/*  <Search /> */}
      <Products category="smartphones"/> 
   </SafeAreaView>
   
  );
}

const styles = StyleSheet.create({

});
