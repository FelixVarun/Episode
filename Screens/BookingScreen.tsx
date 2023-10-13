import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'


const BookingScreen: React.FC = () => {
    return (
        <View>
            <View>
                <Text style={styles.text}>Hello</Text>
                <Text style={styles.text2}>Jon</Text>
            </View>

            <View style={{ alignItems: "center", marginVertical: 20 }}>
                <Text style={{ color: "black", fontWeight: "500", fontSize: 16 }}>Lorem ipum</Text>
                <Text style={{ color: "black" }}>Lorem ipsum dolor sit, amet consectetur adipisicing elit</Text>
            </View>

            <View style={{ alignItems: "center", marginVertical: 15 }}>
                <TouchableOpacity>
                    <Text style={styles.btn}>Complete my Profile</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.bigbx}>
                <Text style={{ color: "white", fontSize: 20, fontWeight: "bold", margin: 2 }}>Lorem </Text>
                <Text style={{ color: "white", fontSize: 20, fontWeight: "bold", margin: 2 }}>Ipsum </Text>
                <Text style={{ color: "white", fontSize: 15 }}>Lorem ipsum dolor sit amet consectetur adipisicing.
                    Laboriosam molestias dolores ab. Quisquam atque quis a
                    aspernatur ratione sequi tempora ipsa, id neque
                    rerum odit vel</Text>
            </View>

            <View style={{ margin: 10 }}>
                <Text style={{ fontSize: 20, color: "black", fontWeight: "bold", marginVertical: 10 }}>Tutorial</Text>
                <Text style={{ color: "black", fontSize: 15 }}>This step-by-step Beginner-friendly tutorial will guide you on how to use the app</Text>
            </View>

            <ScrollView
             horizontal={true}
             showsHorizontalScrollIndicator={false}
             contentContainerStyle={styles.container}>
                <View style={{marginVertical:10,marginLeft:10,marginRight:2,borderWidth:2,width:150,borderColor:"#FF69B4"}}>
                    <Text style={{fontSize:19,fontWeight:"bold",color:"#FF69B4",padding:10}}>01</Text>
                    <Text style={{padding:10,color:"black"}}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum </Text>
                </View>

                <View style={{marginVertical:10,marginHorizontal:2,borderWidth:2,width:150,borderColor:"#FF69B4"}}>
                    <Text style={{fontSize:19,fontWeight:"bold",color:"#FF69B4",padding:10}}>02</Text>
                    <Text style={{padding:10,color:"black"}}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum </Text>
                </View>

                
                <View style={{marginVertical:10,marginHorizontal:2,borderWidth:2,width:150,borderColor:"#FF69B4"}}>
                    <Text style={{fontSize:19,fontWeight:"bold",color:"#FF69B4",padding:10}}>03</Text>
                    <Text style={{padding:10,color:"black"}}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum </Text>
                </View>

                <View style={{marginVertical:10,marginHorizontal:2,borderWidth:2,width:150,borderColor:"#FF69B4"}}>
                    <Text style={{fontSize:19,fontWeight:"bold",color:"#FF69B4",padding:10}}>04</Text>
                    <Text style={{padding:10,color:"black"}}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum </Text>
                </View>
            </ScrollView>

        </View>
    )
}

export default BookingScreen

const styles = StyleSheet.create({
    text: {
        fontSize: 26,
        fontWeight: "bold",
        color: "black",
        marginTop: 10,
        marginLeft: 15
    },
    text2: {
        fontSize: 26,
        fontWeight: "bold",
        color: "black",
        marginLeft: 15
    },
    btn: {
        color: "white",
        backgroundColor: "#FF69B4",
        paddingHorizontal: 15,
        paddingVertical: 10,
        fontWeight: "500",
        fontSize: 16,
        borderRadius: 25
    },
    bigbx: {
        margin: 10,
        backgroundColor: "#FF69B4",
        paddingVertical: 15,
        paddingHorizontal: 10,
        alignItems: "flex-end",

    },
    container: {
        flexDirection: 'row', // Make content horizontally scrollable
      },
})