import React, { Component } from 'react'
import {
  View,
  TextInput,
  TouchableWithoutFeedback,
  StyleSheet
} from 'react-native'

import Icon from 'react-native-vector-icons/MaterialIcons';

<<<<<<< HEAD
export default class InputComIconQuad extends Component {
=======
export default class InputComIcon extends Component {
>>>>>>> 1c6527b9eb5264e83558203a073b0975b0c31a2c
  constructor(props){
    super(props)
  }

  render(){
    return (
      <View style={styles.inputContainer}>
        <TouchableWithoutFeedback>
<<<<<<< HEAD
          <Icon style={styles.icon} name={this.props.icon} size={this.props.iconSize} color={this.props.iconColor} />
=======
          <Icon style={styles.icon} name={this.props.icon} size={20} color="#666" />
>>>>>>> 1c6527b9eb5264e83558203a073b0975b0c31a2c
        </TouchableWithoutFeedback>
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
    flexDirection: 'row'
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
<<<<<<< HEAD

})
=======
  
})
>>>>>>> 1c6527b9eb5264e83558203a073b0975b0c31a2c
