import React from 'react'
import { View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CafeListScreen from './components/CafeListScreen';
import CafeDetailScreen from './components/CafeDetailScreen';


const Stack = createNativeStackNavigator();

function App() {
  return (
    // <View style={{borderWidth:1,borderColor:"blue",height:400, margin:10}}>
    //     <View style={{borderWidth:1, borderColor:"red", height:100,margin:10}}>
        
    //     </View>
    //     <View style={{borderWidth:1, borderColor:"red", height:100,margin:10}}>
        
    //     </View>
    //     <View style={{borderWidth:1, height:100,margin:10}}>
        
    //     </View>


    // </View>
    // <View>
    //   <View style={{borderWidth:1,borderColor:"red",height:400,margin:10}} onTouchStart={()=>alert("on touch start")}>
    //     </View> 
    // </View>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={CafeListScreen} />
        <Stack.Screen name="Details" component={CafeDetailScreen} />

      </Stack.Navigator>
    </NavigationContainer>


  )
}

export default App