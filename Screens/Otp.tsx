import { StyleSheet, Text, View, TouchableOpacity, TextInput, Alert } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native';
const Otp = () => {

    const navigation = useNavigation();
    const [otp, setOtp] = useState('');

    const predefinedOTP = '1234'; // Replace with your actual OTP

    const handleContinue = () => {
        if (otp === predefinedOTP) {
            // OTP is correct, navigate to the 'Register' screen
            (navigation as any).navigate('Register');
        } else {
            // OTP is incorrect, show an error message
            // You can also clear the OTP input field here if needed
            Alert.alert('Invalid OTP', 'Please enter a valid OTP.');
        }
    };


    return (
        <View style={{ alignItems: "center", justifyContent: "center", flex: 1, marginBottom: 50 }}>
            <View style={{ marginBottom: 40 }}>
                <Text style={{ color: "black", fontSize: 20, fontWeight: "bold" }}>Enter OTP</Text>
                <Text style={{ color: "black", fontSize: 14, fontWeight: "bold", marginTop: 10, width: 240 }}>We have sent you the SMS with 4 digit verification code</Text>
            </View>

            <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 20 }}>

                <TextInput style={styles.input} keyboardType='numeric'
                    value={otp.charAt(0)} onChangeText={(text) => setOtp(text.charAt(0))} />
                <TextInput style={styles.input} keyboardType='numeric'
                 value={otp.charAt(1)} onChangeText={(text) => setOtp(otp.charAt(0) + text.charAt(0))} />
                <TextInput style={styles.input} keyboardType='numeric'
                 value={otp.charAt(2)} onChangeText={(text) =>  setOtp(otp.slice(0, 2) + text.charAt(0))}  />
                <TextInput style={styles.input} keyboardType='numeric' 
               value={otp.charAt(3)} onChangeText={(text) => setOtp(otp.slice(0, 3) + text.charAt(0))}  />



            </View>

            <TouchableOpacity onPress={handleContinue}>
                <View style={styles.cont}>
                    <Text style={styles.btn}>Continue</Text>
                </View>
            </TouchableOpacity>

            <View style={{ marginTop: 20, flexDirection: "row" }}>
                <Text style={{ color: "black", fontWeight: "bold" }}>Didn't receive a code ? </Text>
                <Text style={{ color: "#FF69B4", fontWeight: "bold" }}> Resend</Text>
            </View>
        </View>
    )
}

export default Otp

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
    },
    input: {
        color: "black",
        fontSize: 20,
        height: 40,
        width: 40,
        borderBottomWidth: 0.5,
        margin: 5
    }
})