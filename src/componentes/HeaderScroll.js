import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Feather'
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function HeaderScroll(props){


  function navigateToTodos(idEstabelecimento){
    console.log("aa");
    navigation.navigate('Todos', {idEstabelecimento})
  }

  return(
    <TouchableOpacity style={styles.headerContainer} onPress={props.function}>
      <View style={styles.cont}>
        <Text style={styles.title}>{props.title}</Text>    
        <Icon name={props.icon} size={props.size} color={"#666"} />        
      </View>  
    </TouchableOpacity>  
  )
  
}

const styles = StyleSheet.create({ 
  headerContainer: {
    width: '100%', 
    height: 55,
    marginBottom: 3,
    flexDirection: 'row',
    alignItems: 'center', 
    paddingHorizontal: 20,
    backgroundColor: '#fff',  
  },
  
  cont: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#fff'
  },

  title: {
    fontSize: 18,
    marginLeft: 10,
    color: '#666',  
  },
});