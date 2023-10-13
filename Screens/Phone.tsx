import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const Phone = () => {
    const navigation = useNavigation();
    return (
        <View style={{ alignItems: "center", justifyContent: "center", flex: 1, marginBottom: 50 }}>
            <View style={{ marginRight: 70, marginBottom: 40 }}>
                <Text style={{ color: "black", fontSize: 20, fontWeight: "bold" }}>Enter your</Text>
                <Text style={{ color: "black", fontSize: 20, fontWeight: "bold" }}>Phone number</Text>
            </View>

            <View style={{ borderBottomWidth: 0.5, flexDirection: "row", alignItems: "center", width: 200, marginBottom: 20 }}>
                <View style={{ marginRight: 5 }}>
                    <Text style={{ color: "black", fontSize: 20 }}>+91</Text>
                </View>

                <View>
                    <TextInput style={{ color: "black", fontSize: 20 }} placeholder='Mobile Number' keyboardType='numeric' />
                </View>


            </View>

            <TouchableOpacity onPress={()=>(navigation as any).navigate('otp')}>
                <View style={styles.cont}>
                    <Text style={styles.btn}>Continue</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default Phone

const styles = StyleSheet.create({
    btn: {
        color: "white",

        fontWeight: "500",
        fontSize: 18,


    },
    cont: {
        backgroundColor: "#FF69B4",
        paddingHorizontal: 15,
        paddingVertical: 12,
        borderRadius: 25,
        width: 250,
        alignItems: "center",
        marginTop: 40
    }
})