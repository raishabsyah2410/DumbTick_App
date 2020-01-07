import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  TouchableOpacity,
  ImageBackground
} from 'react-native';
class Main extends Component {
  render() {
    return (
      <View style={{ backgroundColor: '#EE7070', flex: 1 }}>
          <Text style={[styles.welcome]}>Welcome to Dumtick</Text>
          <Image style={[styles.image]} source={require('../Images/ticket.png')} />
          <Text style={{ color: 'white', fontSize: 24, textAlign: 'center'}}>Dum-tick App is a music, science, sport and programming event ticket sales aplication</Text>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('HomeSCreen')}
            style={[styles.button]} >
            <Text style={{ color: 'white', fontSize: 25, textAlign: 'center' }}> Continue </Text>
          </TouchableOpacity>
      </View>
    );
  }
}

export default Main;


const styles = StyleSheet.create({
    welcome: {
      color: 'white',
      fontWeight: 'bold',
      fontSize: 30,
      textAlign: "center",
      marginBottom: 100,
      marginTop: 20
    },
    red: {
      color: 'red',
    },
    image: {
      marginTop: 100,
      marginBottom: 30,
      alignSelf: 'center'
    },
    button: {
      backgroundColor: '#922B21',
      width: 200,
      height: 40,
      borderRadius: 5,
      alignSelf: 'center',
      borderBottomColor: 'white',
    }
  });