import React, { Component } from 'react'
import {
  View,
  TextInput,
  TouchableWithoutFeedback,
  StyleSheet
} from 'react-native'

import Icon from 'react-native-vector-icons/MaterialIcons';

export default class InputBasico extends Component {
  constructor(props){
    super(props)
  }

  render(){
    return (
      <View style={styles.inputContainer}>
        <TextInput
          style={[styles.input, this.props.style]}
          placeholderTextColor="#666"
          {...this.props}>
        </TextInput>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  inputContainer: {
    borderColor: 'rgba(70,70,70, 0.31)',
    borderWidth: 1,
    borderRadius: 10,
    paddingLeft: 20,
    marginTop: 25,
    flexDirection: 'row',
   
  },

  icon: {
    alignSelf: 'center',
    paddingRight: 20,
    marginLeft: 10,
    color: 'rgba(0,0,0,0.7)'
  },

  input: {
    fontSize: 16,
    color: '#666',
    flex: 1
  }
  
})