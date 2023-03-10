import React, {useState,} from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';
import AppLoading from 'expo-app-loading';

import {
  useFonts, 
Nunito_400Regular,
  Lato_400Regular,
}
from '@expo-google-fonts/dev';

export default function App() {

let[fontsLoaded] = useFonts({
  
Nunito_400Regular,
  Lato_400Regular,
 

});

if(!fontsLoaded){
  return <AppLoading/>;
}
else{

  return (
    <View style={styles.container}>
 
  <Text style={styles.titulo}> Os melhores videogames do planeta Terra </Text>

  <FlatList 
    data={arrayConsole}
    renderItem={({item})=>
    
    <View style={styles.container}>
      <Text style={styles.console}>
      
      {item.console} - {item.ano} - {item.jogos}
      
      </Text>
    </View>
    
    }
   />

 
    </View>
  );
}
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  }, 
  titulo: {

    fontSize: 40,
    color: '#882414',
    fontFamily: 'Nunito_400Regular'

  }
});

const arrayConsole =[

  { console:'nintendinho',ano:'1983', jogos:'super mario bros, duck hunt, tetris, donkey kong'},
  {console:'playstation 5', ano:'2022', jogos:'Spider man, The last of us 2'},
  {console:'Playstation 2', ano:'2001', jogos:'God of War, Shadow of the colossus,Resident Evil 4, Grand Theft Auto: San Andreas'},
  {console:'Game boy', ano:'1989', jogos:'Pokemon red, Kirby dream land'},
  {console:'Sega Saturn', ano:'1994', jogos:'Virtua Fighter, Sonic 3'}
]



