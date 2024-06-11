import { Button, Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import AddToCart from '../components/Redux/Action';
import Store from '../components/Redux/Store';
import Cart from '../components/Modal/Cart';




const Home = () => {
  const [apidata, setApiData] = useState([]);
  const CartData = useSelector((state) => state.cart)
  const [isModalVisible, setIsModalVisible] = useState(false);

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };



  useEffect(() => {
    getapi()

  }, []);

  const cartLength = CartData?.length || 0;

  const getapi = async () => {
    const req = await axios.get('https://ecom-fake-api.onrender.com/t-shirts')
    setApiData(req.data)
    console.log(req.data)

  }

  const dispatch = useDispatch()


  return (
    <ScrollView style={styles.view} >

      <View style={styles.mainView}>

        <Text style={{ zIndex: 1, textAlign: 'center', color: 'black', left: 320, backgroundColor: 'gold', width: 30, borderRadius: 50, height: 20, top: 20 }}>{cartLength}</Text>
        
        <TouchableOpacity  onPress={toggleModal}>
          <Image
            style={{ height: 60, width: 60, left: 290 }}
            source={require('../components/assets/cart.png')} />
        </TouchableOpacity>

      </View>

      <View style={styles.mainView}>
        {apidata.map(item => (
          <View style={styles.apiView} key={item.id}>
            <View style={styles.textView} >
              <Text style={styles.text}>{item.id}</Text>
              <Text style={styles.text}>Name: {item.name}</Text>
              <Text style={styles.text}>Price: {item.price}</Text>
            </View>
            <View style={styles.imgView} >
              <Image
                style={{ height: 130, width: 130, }}
                source={{ uri: item.picture }} />
            </View>
            <View style={styles.buttonView} >
              <TouchableOpacity onPress={() => dispatch(AddToCart(item))} style={styles.button}>
                <Text style={styles.buttonText}>Add To Cart</Text>
              </TouchableOpacity>
            </View>

          </View>
        )
        )}
      </View>
      <Cart isVisible={isModalVisible} onDismiss={toggleModal}/>

      {/* <View >

        {CartData?.map(item => (

          <View key={item.id} style={styles.imgView} >
            <Text>{item.name}</Text>
            <Text >{item.price}</Text>
            <Image
              style={{ height: 130, width: 130, }}
              source={{ uri: item.picture }} />
          </View>
        ))}
      </View> */}

    </ScrollView>
  )
}

export default Home

const styles = StyleSheet.create({
  view: {

  },
  mainView: {


  },
  apiView: {
    borderColor: 'lightgray',
    borderWidth: 1,


  },
  textView: {
    top: 80,
    paddingRight: 10

  },
  imgView: {


  },
  text: {
    color: 'black',


    textAlign: 'right'
  },
  buttonView: {
    alignItems: 'flex-end',
    paddingRight: 10

  },
  button: {
    backgroundColor: 'seagreen',
    width: 130,
    height: 30,
    justifyContent: 'center',
    borderRadius: 20
  },
  buttonText: {
    textAlign: 'center',

    color: 'white'
  },
})