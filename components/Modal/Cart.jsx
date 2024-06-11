import { Image, Modal, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { useSelector } from 'react-redux';


const Cart = ({ isVisible, onDismiss }) => {
    const [modalVisible, setModalVisible] = useState(false);
    const CartData = useSelector((state) => state.cart)
    return (
        <View style={styles.centeredView}>
            <Modal
                animationType="slide"
                transparent={false}
                visible={isVisible}
                onRequestClose={() => {
                    Alert.alert('Modal has been closed.');
                    setModalVisible(!modalVisible);
                }}>
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        {CartData?.map(item => (

                            <View key={item.id} style={styles.mainView}  >
                                <View key={item.id} style={styles.imageView}  >
                                    <Image
                                        style={{ height: 130, width: 130, borderRadius: 30 }}
                                        source={{ uri: item.picture }} />
                                </View>
                                <View style={styles.TextView}>
                                    <Text style={styles.dataStyle}>Name : {item.name}</Text>
                                    <Text  style={styles.dataStyle}>Price : {item.price}</Text>

                                </View>

                            </View>
                        ))}

                    </View>
                </View>
                
                <Pressable
                    style={[styles.button, styles.buttonClose]}
                    onPress={onDismiss}>
                    <Text style={styles.textStyle}>Hide Modal</Text>
                </Pressable>
            </Modal>

        </View>
    )
}

export default Cart

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,

        marginTop: 22,
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,

        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
    },
    buttonOpen: {
        backgroundColor: '#F194FF',
    },
    buttonClose: {
        backgroundColor: '#2196F3',
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
    },
    mainView: {
        flexDirection: 'row'
    },
    TextView: {
       width:150,
        justifyContent:'center',
        
    },
    dataStyle: {
        fontWeight: 'bold',
        textAlign: 'center',
        color:'black',
        fontSize:16
     },
    
})