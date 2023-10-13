import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet,Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';


    const Signin = () => {
      const navigation = useNavigation();
      const [email, setEmail] = useState('');
      const [password, setPassword] = useState('');
    
      const handleLogin = async () => {
        // Retrieve user data from AsyncStorage
        const storedUsername = await AsyncStorage.getItem('username');
        const storedPassword = await AsyncStorage.getItem('password');
    
        if (email === storedUsername && password === storedPassword) {
            // Successful login
            (navigation as any).navigate('home');
            
            setEmail('');
            setPassword('');
          } else {
            // Wrong email or password, show an alert
            Alert.alert('Login Failed', 'Email or password is incorrect.');
          }
      };
    
      return (
        <View>
          <View style={{ backgroundColor: "#FF69B4", height: 100, alignItems: "center" }}>
            <Text style={{ margin: 30, fontSize: 25, color: "white", fontWeight: "bold" }}>Sign In</Text>
          </View>
          <View style={{ marginTop: 100 }}>
            <View style={{ marginHorizontal: 30, marginVertical: 10 }}>
              <Text style={{ fontWeight: "bold", color: "black", fontSize: 17 }}>Email</Text>
              <TextInput
                style={{ borderBottomWidth: 0.5, fontSize: 16, color: "black" }}
                value={email}
                onChangeText={setEmail}
              />
            </View>
            <View style={{ marginHorizontal: 30, marginVertical: 10 }}>
              <Text style={{ fontWeight: "bold", color: "black", fontSize: 17 }}>Password</Text>
              <TextInput
                style={{ borderBottomWidth: 0.5, fontSize: 16, color: "black" }}
                value={password}
                onChangeText={setPassword}
              />
            </View>
          </View>
          <TouchableOpacity style={{ alignItems: 'center' }} onPress={handleLogin}>
            <View style={styles.cont}>
              <Text style={styles.btn}>Sign In</Text>
            </View>
          </TouchableOpacity>
          <View style={{ alignItems: "center", paddingHorizontal: 20, marginTop: 20, justifyContent: "center" }}>
            <Text style={{ color: "black" }}>Already have an account..? </Text>
            <TouchableOpacity onPress={() => (navigation as any).navigate('Register')}>
              <Text style={{ color: "#FF69B4", fontSize: 16, fontWeight: "bold" }}>Register</Text>
            </TouchableOpacity>
          </View>
        </View>
      );
    };
    
export default Signin

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
        marginTop: 50
    }
})