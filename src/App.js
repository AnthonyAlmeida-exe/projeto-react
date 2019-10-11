
import React from 'react';
import {View,Text,StyleSheet} from 'react-native'
import Simples from './components/simples'

export default function(){
  return(
    <View style={style.container}><Simples style={style.f20}/></View>
  )     
}

const style = StyleSheet.create ({
container :{
  flex:1,
  justifyContent:"center",
  alignItems:"center",
},
f20:{
fontSize:40
}

})