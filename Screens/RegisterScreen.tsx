import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const RegisterScreen = () => {
  const navigation = useNavigation();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [location, setLocation] = useState('');

  const handleRegistration = async () => {
    // Store user data in AsyncStorage
    await AsyncStorage.setItem('username', email);
    await AsyncStorage.setItem('password', password);

    // Navigate to the Home Screen or any other screen upon successful registration
    (navigation as any).navigate('home');
  };


  return (
    <View>
      <View style={{ backgroundColor: '#FF69B4', height: 150 }}>
        <View style={{ margin: 30 }}>
          <Text style={{ fontSize: 18, color: 'white', fontWeight: 'bold' }}>Create your Pingle Account</Text>
          <Text style={{ color: 'white', marginTop: 20 }}>Mobile verified</Text>
        </View>
      </View>

      <View style={{ marginHorizontal: 30, marginVertical: 15 }}>
        <Text style={{ fontWeight: 'bold', color: 'black', fontSize: 17 }}>Name</Text>
        <TextInput
          style={{ borderBottomWidth: 0.5, fontSize: 16, color: 'black' }}
          value={name}
          onChangeText={setName}
        />
      </View>

      <View style={{ marginHorizontal: 30, marginVertical: 10 }}>
        <Text style={{ fontWeight: 'bold', color: 'black', fontSize: 17 }}>Email</Text>
        <TextInput
          style={{ borderBottomWidth: 0.5, fontSize: 16, color: 'black' }}
          value={email}
          onChangeText={setEmail}
        />
      </View>

      <View style={{ marginHorizontal: 30, marginVertical: 10 }}>
        <Text style={{ fontWeight: 'bold', color: 'black', fontSize: 17 }}>Password</Text>
        <TextInput
          style={{ borderBottomWidth: 0.5, fontSize: 16, color: 'black' }}
          value={password}
          onChangeText={setPassword}
        />
      </View>

      <View style={{ marginHorizontal: 30, marginVertical: 10 }}>
        <Text style={{ fontWeight: 'bold', color: 'black', fontSize: 17 }}>Location</Text>
        <TextInput
          style={{ borderBottomWidth: 0.5, fontSize: 16, color: 'black' }}
          value={location}
          onChangeText={setLocation}
        />
      </View>

      <TouchableOpacity style={{ alignItems: 'center' }} onPress={handleRegistration}>
                <View style={styles.cont}>
                    <Text style={styles.btn}>Register</Text>
                </View>
            </TouchableOpacity>

            <View style={{alignItems:"center",paddingHorizontal:20,marginTop:20,justifyContent:"center"}}>
                <Text style={{color:"black"}}>Already have an account..? </Text>
                <TouchableOpacity onPress={()=>(navigation as any).navigate('signin')}>
                <Text style={{color:"#FF69B4",fontSize:16,fontWeight:"bold"}}>Sign in</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}

export default RegisterScreen

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