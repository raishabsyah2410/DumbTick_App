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
import { Header, Footer, Content, CardItem } from 'native-base';
const data = [
  // {
  //   imageUrl: "http://via.placeholder.com/160x160",
  //   title: "something"
  // },
  // {
  //   imageUrl: "http://via.placeholder.com/160x160",
  //   title: "something six"
  // }
];
class Order extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: data
    };
  }
  render() {
    return (
      <ScrollView style={{ backgroundColor: '#EE7070', flex: 1 }}>
        {/* // Start header */}
        <Header>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('MainScreen')}>
            <Text style={{ fontSize: 25, color: "white", textAlign: "center", marginLeft: 10 }}>Back</Text></TouchableOpacity>
        </Header>
        {/* End Header */}
        <View>
            <Text style={{ fontWeight: "bold", fontSize: 20, padding: 20, textAlign: "center" }}>Mau Bayar Ya ?????</Text>
            <Text style={{ fontWeight: "bold", fontSize: 20, padding: 20, textAlign: "center" }}>Masih Tutup Dek</Text>
            <Text style={{ fontWeight: "bold", fontSize: 20, padding: 20, textAlign: "center" }}>Balik Bsok Ya :)</Text>
          <TouchableOpacity style={{ width: "100%", height: 60, backgroundColor: "red", marginTop: 50, marginBottom: 200 }}
          onPress={() => this.props.navigation.navigate('MainScreen')}>
              <Text style={{ fontWeight: "bold", fontSize: 20, padding: 20, textAlign: "center"}}>
                Home
                </Text>
            </TouchableOpacity>
       </View>
        {/* start footer */}
        <Footer style={{ backgroundColor: "red"}}>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('CategoryScreen')}>
            <Text style={{ fontSize: 25, color: "white", textAlign: "center", marginLeft: 10 }}>Category</Text></TouchableOpacity>

          <TouchableOpacity onPress={() => this.props.navigation.navigate('MainScreen')}>
            <Text style={{ fontSize: 25, color: "white", textAlign: "center", marginLeft: 10 }}>Home</Text></TouchableOpacity>

          <TouchableOpacity onPress={() => this.props.navigation.navigate('MainScreen')}>
            <Text style={{ fontSize: 25, color: "white", textAlign: "center", marginLeft: 10 }}>Exit</Text></TouchableOpacity>
        </Footer>
        {/* end footer */}
      </ScrollView>
        );
      }
    }
    
export default Order;