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
  {
    imageUrl: "https://bit.ly/2FjY0xK",
    title: "something two"
  },
  {
    imageUrl: "https://bit.ly/2FkwvUA",
    title: "something three"
  },
  {
    imageUrl: "http://via.placeholder.com/160x160",
    title: "something four"
  },
  {
    imageUrl: "http://via.placeholder.com/160x160",
    title: "something five"
  },
  {
    imageUrl: "https://bit.ly/2FkwvUA",
    title: "something six"
  }
];
class Home extends Component {
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
        <View style={{marginBottom:30}}>
          <Text style={{ fontSize: 25, color: "white" }}>Today Event</Text>
          <FlatList
            horizontal
            data={this.state.data}
            renderItem={({ item: rowData }) => {
              return (
                <TouchableOpacity onPress={() => this.props.navigation.navigate('DetailScreen')}>
                  <Card
                    title={null}
                    image={{ uri: rowData.imageUrl }}
                    containerStyle={{ padding: 0, width: 160 }}
                  >
                    <Text style={{ marginBottom: 10 }}>
                      {rowData.title}
                    </Text>
                  </Card>
                </TouchableOpacity>
              );
            }}
            keyExtractor={(item, index) => index}
          />
        </View>
        <View style={{marginBottom:100}}>
          <Text style={{ fontSize: 25, color: "white" }}>Upcoming Event</Text>
          <FlatList
            horizontal
            data={this.state.data}
            renderItem={({ item: rowData }) => {
              return (
                <Card
                  title={null}
                  image={{ uri: rowData.imageUrl }}
                  containerStyle={{ padding: 0, width: 160 }}
                >
                  <Text style={{ marginBottom: 10 }}>
                    {rowData.title}
                  </Text>
                </Card>
              );
            }}
            keyExtractor={(item, index) => index}
          />
        </View>
        {/* start footer */}
        <Footer style={{ backgroundColor: "red"}}>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('CategoryScreen')}>
            <Text style={{ fontSize: 25, color: "white", textAlign: "center", marginLeft: 10 }}>Category</Text></TouchableOpacity>

          <TouchableOpacity onPress={() => this.props.navigation.navigate('MainScreen')}>
            <Text style={{ fontSize: 25, color: "white", textAlign: "center", marginLeft: 10 }}>Start</Text></TouchableOpacity>

          <TouchableOpacity onPress={() => this.props.navigation.navigate('MainScreen')}>
            <Text style={{ fontSize: 25, color: "white", textAlign: "center", marginLeft: 10 }}>Exit</Text></TouchableOpacity>
        </Footer>
        {/* end footer */}
      </ScrollView>
    );
  }
}

export default Home;