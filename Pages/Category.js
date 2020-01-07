import React, { Component } from 'react';
import { Card } from "react-native-elements";
import {
  StyleSheet,
  Text,
  FlatList,
  View,
  Button,
  Image,
  TouchableOpacity,
  ImageBackground,
  ScrollView
} from 'react-native';
import { Header, Footer, Content } from 'native-base';
const data = [
    {
      imageUrl: "https://bit.ly/2MTGYuy",
      title: "something"
    },
  //   {
  //     imageUrl: "https://bit.ly/2FjY0xK",
  //     title: "something two"
  //   },
  //   {
  //     imageUrl: "https://bit.ly/2FkwvUA",
  //     title: "something three"
  //   },
  //   {
  //     imageUrl: "http://via.placeholder.com/160x160",
  //     title: "something four"
  //   },
  //   {
  //     imageUrl: "http://via.placeholder.com/160x160",
  //     title: "something five"
  //   },
  //   {
  //     imageUrl: "https://bit.ly/2FkwvUA",
  //     title: "something six"
  //   }
];
class Category extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: data
    };
  }
  render() {
    return (
      // Start header
      <ScrollView style={{ backgroundColor: '#EE7070', flex: 1 }}>
        <Header>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('MainScreen')}>
            <Text style={{ fontSize: 25, color: "white", textAlign: "center", marginLeft: 10 }}>Back</Text></TouchableOpacity>
        </Header>
        {/* End Header */}

        <TouchableOpacity onPress={() => this.props.navigation.navigate('MainScreen')}
          style={{ width: "100%", height: 35, alignSelf: "center", backgroundColor: "blue", marginBottom: 12 }}>
          <Card style={{ fontSize: 25, color: "white", textAlign: "center" }}>Music</Card>
        </TouchableOpacity>
        <TouchableOpacity style={{ width: "100%", height: 35, alignSelf: "center", backgroundColor: "blue", marginBottom: 12 }}>
          <Text style={{ fontSize: 25, color: "white", textAlign: "center" }}>Sport</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ width: "100%", height: 35, alignSelf: "center", backgroundColor: "blue", marginBottom: 12 }}>
          <Text style={{ fontSize: 25, color: "white", textAlign: "center" }}>Science</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ width: "100%", height: 35, alignSelf: "center", backgroundColor: "blue", marginBottom: 12 }}>
          <Text style={{ fontSize: 25, color: "white", textAlign: "center" }}>Programing</Text>
        </TouchableOpacity>
        {/*  */}

        {/* start footer */}
        <Footer style={{ backgroundColor: "red" }}>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('DetailScreen')}>
            <Text style={{ fontSize: 25, color: "white", textAlign: "center", marginLeft: 10 }}>Category</Text></TouchableOpacity>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('HomeScreen')}>
            <Text style={{ fontSize: 25, color: "white", textAlign: "center", marginLeft: 10 }}>Home</Text></TouchableOpacity>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('DetailScreen')}>
            <Text style={{ fontSize: 25, color: "white", textAlign: "center", marginLeft: 10 }}>Exit</Text></TouchableOpacity>
        </Footer>
        {/* end footer */}
      </ScrollView>
    );
  }
}

export default Category;