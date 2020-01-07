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
class Detail extends Component {
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
          <TouchableOpacity onPress={() => this.props.navigation.navigate('HomeScreen')}>
            <Text style={{ fontSize: 25, color: "white", textAlign: "center", marginLeft: 10 }}>Back</Text></TouchableOpacity>
        </Header>
        {/* End Header */}
        <View>
          <Card>
            <CardItem>
              <Image source={{ uri: 'https://bit.ly/2MTGYuy' }} style={{ height: 200, width: null, flex: 1 }} />
            </CardItem>
            <View>
              <Text style={{width:300}}>Sampai tahun ini hanya ada tiga musisi Tanah Air yang menggelar konser di lokasi tersebut, Kantata Takwa, Iwan Fals, dan Slank. Lalu berapa harga tiket konser Raisa? Harga tiket Raisa Live In Concert terbagi menjadi Platinum (Rp 3.000.000), Gold (Rp 2.500.000), Silver (Rp 1.500.000), Bronze (Rp 500.000), Red (Rp 300.000), Blue (Rp 150.000), Festival A (Rp 350.000), dan Festival B (Rp 200.000). Artikel ini telah tayang di Kompas.com dengan judul "Catat! Ini Tanggal dan Harga Tiket Konser Raisa di GBK", https://www.kompas.com/hype/read/2019/11/22/081327966/catat-ini-tanggal-dan-harga-tiket-konser-raisa-di-gbk. Penulis : Melvina Tionardus Editor : Tri Susanto Setiawan Artikel ini telah tayang di Kompas.com dengan judul "Catat! Ini Tanggal dan Harga Tiket Konser Raisa di GBK", https://www.kompas.com/hype/read/2019/11/22/081327966/catat-ini-tanggal-dan-harga-tiket-konser-raisa-di-gbk. Penulis : Melvina Tionardus Editor : Tri Susanto Setiawan

Artikel ini telah tayang di Kompas.com dengan judul "Catat! Ini Tanggal dan Harga Tiket Konser Raisa di GBK", https://www.kompas.com/hype/read/2019/11/22/081327966/catat-ini-tanggal-dan-harga-tiket-konser-raisa-di-gbk.
Penulis : Melvina Tionardus
Editor : Tri Susanto Setiawan</Text>
            </View>
          </Card>
        </View>
        <View style={{ padding: 12 }}>
          <TouchableOpacity style={{ width: "100%", height: 60, backgroundColor: "red", marginTop: 50, marginBottom: 200 }}
          onPress={() => this.props.navigation.navigate('OrderScreen')}>
              <Text style={{ fontWeight: "bold", fontSize: 20, padding: 20, textAlign: "center" }}>
                Order
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
    
export default Detail;