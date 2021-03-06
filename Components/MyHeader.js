import React, { Component} from 'react';
import { Header,Icon,Badge } from 'react-native-elements';
import firebase from 'firebase';



export default class MyHeader extends Component{
  
  constructor(props){
    super(props)
    this.state={
      userId : firebase.auth().currentUser.email,
      value:""
    }
  }
  render(){
    return(
        <Header
          leftComponent={<Icon name='bars' type='font-awesome' color='#696969' onPress={() => this.props.navigation.toggleDrawer()}/>}
        
          centerComponent={{ text: this.props.title, style: { color: '#00868B',fontWeight:"bold", } }}
          backgroundColor = "#00F5FF"
        />

)
}

}